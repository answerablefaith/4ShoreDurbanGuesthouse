from pathlib import Path
from PIL import Image, ImageOps
import base64
import io
import json

ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "assets" / "images" / "blog"
OUTPUT = BLOG_DIR / ".inspection-thumbnails.json"
FILES = [
    "Pasted 30-09-2026 at 21.46.52.png",
    "Pasted 30-09-2026 at 21.47.55.png",
    "Pasted 30-09-2026 at 21.52.47.png",
    "Pasted 30-09-2026 at 21.53.35.png",
]

items = []
for name in FILES:
    path = BLOG_DIR / name
    if not path.exists():
        continue
    with Image.open(path) as raw:
        img = ImageOps.exif_transpose(raw).convert("RGB")
        original_size = f"{img.width}x{img.height}"
        img.thumbnail((640, 640), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        img.save(buf, "JPEG", quality=72, optimize=True, progressive=True)
    items.append({
        "file": name,
        "dimensions": original_size,
        "thumbnail_jpeg_base64": base64.b64encode(buf.getvalue()).decode("ascii"),
    })

OUTPUT.write_text(json.dumps(items), encoding="utf-8")
print(f"Wrote {len(items)} thumbnails to {OUTPUT.relative_to(ROOT)}")
