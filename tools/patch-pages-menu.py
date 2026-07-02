from pathlib import Path
import re

HOME = Path("index.html")

NAV = '''<nav class="site-nav" id="site-nav" aria-label="Primary navigation">
 <a href="#home">Home</a>
 <a href="#gallery">Gallery</a>
 <a href="#about">About</a>
 <a href="#rooms">Rooms</a>
 <a href="#explore">The Bluff</a>
 <a href="#reviews">Reviews</a>
 <a href="#rates">Rates</a>
 <a href="#directions">Find us</a>
 <a href="blog/">Blog</a>
 </nav>'''

START = '<nav class="site-nav" id="site-nav" aria-label="Primary navigation">'
END = '</nav>'
FORM_HANDLER = ' <script src="form-handler.js?v=20260702-formsubmit6" defer></script>\n </body>'


def add_attr(tag, name, value=None):
    if re.search(rf'\s{name}(=|\s|>)', tag):
        return tag
    attr = f' {name}' if value is None else f' {name}="{value}"'
    return tag[:-1] + attr + '>'


def optimise_img(match):
    tag = match.group(0)
    classes = re.search(r'class="([^"]*)"', tag)
    class_value = classes.group(1) if classes else ""

    tag = add_attr(tag, "decoding", "async")

    if "brand-logo" in class_value or "hero-logo" in class_value:
        tag = add_attr(tag, "fetchpriority", "high")
        return tag

    tag = add_attr(tag, "loading", "lazy")
    tag = add_attr(tag, "fetchpriority", "low")
    return tag

try:
    html = HOME.read_text(encoding="utf-8")

    start = html.find(START)
    end = html.find(END, start) if start != -1 else -1
    if start != -1 and end != -1:
        html = html[:start] + NAV + html[end + len(END):]
        print("Homepage menu patched with Home and Blog links.")
    else:
        print("Homepage nav not found; leaving menu unchanged.")

    html = html.replace(
        '<link rel="preload" as="image" href="assets/images/explore/outside-9.jpg">',
        '<link rel="preload" as="image" href="assets/images/brand/4shore-logo.png" fetchpriority="high">'
    )

    html = re.sub(r'<img\b[^>]*>', optimise_img, html)

    html = re.sub(
        r'<script src="script\.js\?v=([^"]+)"></script>',
        r'<script src="script.js?v=\1" defer></script>',
        html,
        count=1,
    )

    if "form-handler.js" not in html and "</body>" in html:
        html = html.replace("</body>", FORM_HANDLER, 1)
        print("Homepage FormSubmit handler added.")

    HOME.write_text(html, encoding="utf-8")
except Exception as exc:
    print(f"Homepage patch skipped: {exc}")
