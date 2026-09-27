from pathlib import Path
from PIL import Image, ImageDraw

src = Path('src/assets/images/zenx_official_logo_1790424576754.jpg')
out = Path('public/favicon.png')
out.parent.mkdir(exist_ok=True)

img = Image.open(src).convert('RGBA')
width, height = img.size
pixels = img.load()

for y in range(height):
    for x in range(width):
        r, g, b, _ = pixels[x, y]
        if r > 245 and g > 245 and b > 245:
            pixels[x, y] = (255, 255, 255, 0)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

size = max(img.size)
canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
logo = img.resize((size, size), Image.LANCZOS)
canvas.paste(logo, (0, 0), logo)

mask = Image.new('L', (size, size), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, size, size), fill=255)

result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
result.paste(canvas, (0, 0), mask)
result.save(out)
print(f'Created {out} ({result.size[0]}x{result.size[1]})')
