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

HOME_COPY_REPLACEMENTS = {
    'content="4Shore Guesthouse offers quiet beachfront accommodation on Anstey\'s Beach in Bluff, Durban, with 9 en-suite rooms, secure parking, Wi-Fi, air-conditioning, and direct enquiry booking."':
    'content="4Shore Guesthouse offers quietly run beachfront accommodation across from Anstey\'s Beach in Bluff, Durban, with nine en-suite rooms, secure parking, Wi-Fi, air-conditioning, and direct enquiry booking."',

    'Nine quiet rooms, <span class="accent">one&nbsp;step</span> from the&nbsp;ocean':
    'Nine en&#8209;suite rooms, <span class="accent">across</span> from Anstey&rsquo;s&nbsp;Beach',

    'An owner&#8209;run guesthouse on Anstey&rsquo;s Beach in Bluff,&nbsp;Durban.':
    'Quietly run, owner&#8209;led accommodation on Foreshore Drive, with secure parking, private entrances, and the beach across the road.',

    'Direct rates, no booking fees':
    'Direct booking, no platform fees',

    'Same&#8209;day reply from Winston':
    'Winston replies with availability and final rates',

    'Owner&#8209;run since opening':
    'Owner&#8209;run from the start',

    'What you&rsquo;ll wake up to':
    'Beach mornings across the road',

    'Wake up to the surf and walk barefoot across to the sand':
    'Wake up near the surf, then walk across to the sand',

    '4Shore Guesthouse presents nine en&#8209;suite rooms with private entrances, secure parking, a beach across the way, and an owner who answers the phone.':
    '4Shore Guesthouse has nine en&#8209;suite rooms with private entrances, secure parking, and Anstey&rsquo;s Beach across Foreshore Drive.',

    'Owner&#8209;run by Winston, who confirms availability and rates directly. No third&#8209;party agents, no booking fees. Most guests come back because the rate is honest, the beds are right, the surf is loud enough at night, and the hospitality is&nbsp;personal.':
    'Winston confirms availability and rates directly, so you know what is available before you arrive. Guests come back for the clear rates, comfortable rooms, sea air, and personal hospitality.',

    'Nine rooms, with the rate shown before you enquire':
    'Nine rooms, clear rates before you enquire',

    'Choose by view, level, bed setup, and guest count. Each card lists the\n applicable out&#8209;of&#8209;season rate and room&#8209;specific details.':
    'Choose by view, level, bed setup, and guest count. Each room card shows the\n out&#8209;of&#8209;season rate and the details that help you decide.',

    'Slow mornings, big swells, short trips into Durban':
    'Beach mornings, tidal pools, and easy Durban trips',

    'Across the road: Anstey&rsquo;s Beach. Five minutes up the coast: the surf at Cave Rock, tidal pools and a golf course. Twenty minutes north: the&nbsp;city.':
    'Start with Anstey&rsquo;s Beach across the road. Add surf spots, tidal pools, golf, restaurants, or a Durban day trip when the weather suits.',

    'Real reviews from real stays. The themes we hear most: warm hospitality, clean comfortable rooms, the breakfast and the short walk to the&nbsp;beach.':
    'Guests often mention the warm welcome, clean comfortable rooms, breakfast, secure parking, and the short walk to the beach.',

    'Honest rates, direct booking':
    'Clear rates, direct booking',

    'Per room, per night. Pay nothing now, Winston confirms your final rate by reply, usually the same day.':
    'Rates are per room, per night. Send your dates and Winston will confirm availability, room choice, and the final rate directly.',

    'No agents, no booking fees. Use the form or call Winston directly, you&rsquo;ll hear back the same day.':
    'No agents and no platform fees. Use the form or call Winston directly, and you&rsquo;ll hear back with the next step.',

    'A short note with your dates, guest count and any room preference, by quick form or phone.':
    'Use the form or phone with your dates, guest count, and any room preference.',

    'You hear back the same day with availability, your final rate and a suggested room for your party.':
    'Winston replies with availability, the final rate, and the room that fits your stay.',

    'Check&#8209;in from 14:00. No card pre&#8209;authorisation, no online payment, no&nbsp;surprises.':
    'Check&#8209;in is from 14:00. No card pre&#8209;authorisation, no online payment, and no surprises.',

    'Directions to 4Shore Guesthouse':
    'How to find 4Shore Guesthouse on Foreshore Drive',

    'From the N2, follow Solomon Mahlangu Drive / M7 towards Bluff Road and then down to Foreshore Drive, right by Anstey&rsquo;s Beach.':
    'From the N2, follow Solomon Mahlangu Drive / M7 towards Bluff Road, then continue down to Foreshore Drive near Anstey&rsquo;s Beach.',

    'Send your dates and we&rsquo;ll do the rest':
    'Send your dates and Winston will confirm what&rsquo;s available',

    'A short note is all we need. Winston replies the same day with availability, your final rate and a suggested room.':
    'Tell us your dates, guest count, and reason for travel. Winston will reply with availability, the final rate, and the room that fits best.',

    'A short form is the fastest route to a confirmed stay. Winston usually replies within a few&nbsp;hours.':
    'The form is the quickest way to check availability. Winston usually replies within a few&nbsp;hours.',

    'Quietly run beachfront accommodation on Anstey&rsquo;s Beach, Bluff, Durban.':
    'Quietly run beachfront accommodation across from Anstey&rsquo;s Beach, Bluff, Durban.',
}


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


def polish_homepage_copy(html):
    for old, new in HOME_COPY_REPLACEMENTS.items():
        if old in html:
            html = html.replace(old, new)
    return html


def optimise_html(path):
    html = path.read_text(encoding="utf-8")

    html = re.sub(r'<img\b[^>]*>', optimise_img, html)
    html = re.sub(r'<script src="([^"]+)"></script>', r'<script src="\1" defer></script>', html)

    if path == HOME:
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

        html = polish_homepage_copy(html)
        print("Homepage editorial copy polished.")

        if "form-handler.js" not in html and "</body>" in html:
            html = html.replace("</body>", FORM_HANDLER, 1)
            print("Homepage FormSubmit handler added.")

    path.write_text(html, encoding="utf-8")


try:
    for html_path in sorted(Path(".").glob("**/*.html")):
        if ".git" in html_path.parts:
            continue
        optimise_html(html_path)
        print(f"Optimised {html_path}")
except Exception as exc:
    print(f"Static page optimisation skipped: {exc}")