from pathlib import Path
import re

CLEAN = '<link rel="stylesheet" href="../mobile-clean-hero.css?v=20260824-mobile-clean3">'
MOBILE_LINK_RE = re.compile(
    r'<link\b(?=[^>]*\bhref=["\'][^"\']*(?:mobile-article-fix|mobile-clean-hero)\.css(?:\?[^"\']*)?["\'])[^>]*>\s*',
    re.IGNORECASE,
)

for path in sorted(Path("blog").glob("*/index.html")):
    original = path.read_text(encoding="utf-8")
    if 'class="article-hero"' not in original:
        continue

    # Remove only the old mobile-hero stylesheet link elements. Never remove
    # an entire source line: some generated articles intentionally contain the
    # whole HTML document on one line.
    html = MOBILE_LINK_RE.sub("", original)

    if "</head>" not in html:
        raise RuntimeError(f"No </head> found after mobile CSS cleanup: {path}")

    html = html.replace("</head>", CLEAN + "\n</head>", 1)

    # Deployment safety guard: a formatting patch must never be able to turn
    # a valid article into a blank or partial page again.
    if "<html" not in html.lower() or "<body" not in html.lower() or "</html>" not in html.lower():
        raise RuntimeError(f"Article structure was damaged while patching: {path}")
    if len(html) < len(original) * 0.9:
        raise RuntimeError(f"Unexpectedly large article deletion while patching: {path}")

    path.write_text(html, encoding="utf-8")
    print(f"Clean mobile hero linked safely: {path}")
