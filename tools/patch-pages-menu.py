from pathlib import Path

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
FORM_HANDLER = ' <script src="form-handler.js?v=20260702-formsubmit5"></script>\n </body>'

try:
    html = HOME.read_text(encoding="utf-8")

    start = html.find(START)
    end = html.find(END, start) if start != -1 else -1
    if start != -1 and end != -1:
        html = html[:start] + NAV + html[end + len(END):]
        print("Homepage menu patched with Home and Blog links.")
    else:
        print("Homepage nav not found; leaving menu unchanged.")

    if "form-handler.js" not in html and "</body>" in html:
        html = html.replace("</body>", FORM_HANDLER, 1)
        print("Homepage FormSubmit handler added.")

    HOME.write_text(html, encoding="utf-8")
except Exception as exc:
    print(f"Homepage patch skipped: {exc}")
