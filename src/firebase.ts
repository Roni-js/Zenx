import { getApps, initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const functions = getFunctions(app);

const hasFirebaseConfig = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export const submitProjectInquiry = hasFirebaseConfig
  ? httpsCallable(functions, 'submitProjectInquiry')
  : async () => {
      throw new Error(
        'Firebase is not configured yet. Add your Firebase project values to the environment and deploy the Cloud Function.'
      );
    };

export default app;
