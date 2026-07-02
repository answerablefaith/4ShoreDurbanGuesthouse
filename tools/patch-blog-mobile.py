from pathlib import Path

CLEAN_HERO_LINK = '  <link rel="stylesheet" href="../mobile-clean-hero.css?v=20260702-mobile-clean1">'
HEADER_MATCH_LINK = '  <link rel="stylesheet" href="../header-match.css?v=20260702-header-match2">'


def patch_article(path: Path) -> None:
    html = path.read_text(encoding="utf-8")

    if 'class="article-hero"' not in html:
        return

    if 'mobile-clean-hero.css' in html:
        print(f"Mobile clean hero already present: {path}")
        return

    if HEADER_MATCH_LINK in html:
        html = html.replace(HEADER_MATCH_LINK, HEADER_MATCH_LINK + "\n" + CLEAN_HERO_LINK, 1)
    elif "</head>" in html:
        html = html.replace("</head>", CLEAN_HERO_LINK + "\n</head>", 1)
    else:
        print(f"No head found, skipped: {path}")
        return

    path.write_text(html, encoding="utf-8")
    print(f"Added clean mobile article hero CSS: {path}")


for article_path in sorted(Path("blog").glob("*/index.html")):
    patch_article(article_path)
