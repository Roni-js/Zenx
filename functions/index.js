require('dotenv').config();
const admin = require('firebase-admin');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const nodemailer = require('nodemailer');

admin.initializeApp();

const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const emailTo = process.env.EMAIL_TO || 'zenx2205@gmail.com';

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

exports.submitProjectInquiry = onCall(async (request) => {
  const data = request?.data || {};
  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const projectType = (data.projectType || 'General Inquiry').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    throw new HttpsError('invalid-argument', 'Name, email, and message are required.');
  }

  if (!smtpUser || !smtpPass) {
    throw new HttpsError(
      'failed-precondition',
      'SMTP email credentials are not configured. Add SMTP_USER and SMTP_PASS in your environment.'
    );
  }

  const mailSubject = `New ZenX inquiry: ${projectType}`;
  const mailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    '',
    'Project brief:',
    message,
  ].join('\n');

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || emailTo,
    to: emailTo,
    replyTo: email,
    subject: mailSubject,
    text: mailText,
    html: `
      <h3>New ZenX project inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Project brief:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  await admin.firestore().collection('project_inquiries').add({
    name,
    email,
    projectType,
    message,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { success: true };
});
