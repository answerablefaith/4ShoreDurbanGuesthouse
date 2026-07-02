from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "assets" / "images"
BLOG_DIR = ROOT / "assets" / "images" / "blog"
BLOG_DIR.mkdir(parents=True, exist_ok=True)

IMAGES = {
    "IMG_2857.jpeg": "ansteys-beach-rocky-shoreline-bluff-durban",
    "IMG_2859.jpeg": "ansteys-beach-tidal-pools-bluff-durban",
    "IMG_2858.jpeg": "bluff-durban-rock-pools-ansteys-beach",
    "IMG_2872.jpeg": "bluff-beachfront-paddling-pool-sunset-durban",
    "IMG_2870.jpeg": "ansteys-beach-promenade-sunset-bluff-durban",
    "IMG_2867.jpeg": "ansteys-beach-sunset-indian-ocean-bluff",
    "IMG_2869.jpeg": "ansteys-beach-golden-hour-walk-bluff-durban",
}


def fit_width(image, max_width):
    if image.width <= max_width:
        return image.copy()
    ratio = max_width / image.width
    height = round(image.height * ratio)
    return image.resize((max_width, height), Image.Resampling.LANCZOS)


def save_versions(source_path, slug):
    with Image.open(source_path) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")

    full = fit_width(image, 1600)
    thumb = fit_width(image, 900)

    full_webp = BLOG_DIR / f"{slug}.webp"
    thumb_webp = BLOG_DIR / f"{slug}-900.webp"
    fallback_jpg = BLOG_DIR / f"{slug}.jpg"

    full.save(full_webp, "WEBP", quality=82, method=6)
    thumb.save(thumb_webp, "WEBP", quality=80, method=6)
    full.save(fallback_jpg, "JPEG", quality=82, optimize=True, progressive=True)

    print(f"Created {full_webp.relative_to(ROOT)}")
    print(f"Created {thumb_webp.relative_to(ROOT)}")
    print(f"Created {fallback_jpg.relative_to(ROOT)}")


def main():
    processed = 0
    for original_name, slug in IMAGES.items():
        source_path = SOURCE_DIR / original_name
        if not source_path.exists():
            print(f"Skipped missing {source_path.relative_to(ROOT)}")
            continue

        save_versions(source_path, slug)
        source_path.unlink()
        print(f"Removed raw upload {source_path.relative_to(ROOT)}")
        processed += 1

    print(f"Processed {processed} blog image upload(s).")


if __name__ == "__main__":
    main()
