from pathlib import Path

CLEAN = '  <link rel="stylesheet" href="../mobile-clean-hero.css?v=20260702-mobile-clean2">'
ANCHOR = '  <link rel="stylesheet" href="../header-match.css?v=20260702-header-match2">'

for path in sorted(Path("blog").glob("*/index.html")):
    html = path.read_text(encoding="utf-8")
    if 'class="article-hero"' not in html:
        continue

    kept = []
    for line in html.splitlines():
        if 'mobile-article-fix.css' in line or 'mobile-clean-hero.css' in line:
            continue
        kept.append(line)
    html = "\n".join(kept) + "\n"

    if ANCHOR in html:
        html = html.replace(ANCHOR, ANCHOR + "\n" + CLEAN, 1)
    elif "</head>" in html:
        html = html.replace("</head>", CLEAN + "\n</head>", 1)

    path.write_text(html, encoding="utf-8")
    print(f"Clean mobile hero linked: {path}")
