const rooms = [
 {
 number: 1,
 title: "Room 1",
 subtitle: "Side sea view",
 view: "Side sea view",
 level: "Ground floor",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["sea", "ground"],
 summary:
 "Quiet ground-floor double with a side sea view from a private patio, suited to a single guest or couple.",
 features: [
 "En-suite shower",
 "Private patio, table and chairs"
 ],
 images: ["room-1-2", "room-1-1", "room-1-4", "room-1-5", "room-1-3"]
 },
 {
 number: 2,
 title: "Room 2",
 subtitle: "Side sea view",
 view: "Side sea view",
 level: "Ground floor",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["sea", "ground"],
 summary:
 "Ground-floor double with a side sea view patio. A calm choice for a single guest or couple.",
 features: [
 "En-suite shower",
 "Patio with table and chair"
 ],
 images: ["room-2-3", "room-2-1", "room-2-2", "room-2-4"]
 },
 {
 number: 3,
 title: "Room 3",
 subtitle: "Garden view",
 view: "Garden view",
 level: "Ground floor",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["garden", "ground"],
 summary:
 "Quiet ground-floor garden room with a private outside patio. Restful and unfussy.",
 features: [
 "En-suite shower",
 "Patio with table and chair"
 ],
 images: ["room-3-1", "room-3-2", "room-3-3", "room-3-4"]
 },
 {
 number: 4,
 title: "Room 4",
 subtitle: "Garden view",
 view: "Garden view",
 level: "Ground floor",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["garden", "ground"],
 summary:
 "Practical garden-view room on ground level with private entrance and patio seating.",
 features: [
 "En-suite shower",
 "Patio with table and chair"
 ],
 images: ["room-4-4", "room-4-2", "room-4-1", "room-4-5", "room-4-3"]
 },
 {
 number: 5,
 title: "Room 5",
 subtitle: "Garden view",
 view: "Garden view",
 level: "Ground floor",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["garden", "ground"],
 summary:
 "Ground-floor garden room for a single guest or couple, with patio seating outside.",
 features: [
 "En-suite shower",
 "Patio with table and chair"
 ],
 images: ["room-5-2", "room-5-3", "room-5-1", "room-5-5", "room-5-4"]
 },
 {
 number: 6,
 title: "Room 6",
 subtitle: "Family room",
 view: "Garden view",
 level: "Ground floor",
 stay: "Twin or family",
 capacity: "Sleeps up to 5",
 beds: "2 doubles + 1 single",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Twin", "R 1 000"],
 ["Triple", "R 1 200"],
 ["Family of 4", "R 1 300"],
 ["Family of 5", "R 1 400"]
 ],
 tags: ["garden", "ground", "family"],
 summary:
 "The largest ground-floor room, three singles sharing or a family of up to five.",
 features: [
 "En-suite shower",
 "Patio with table and chair"
 ],
 images: ["room-6-2", "room-6-1", "room-6-3"]
 },
 {
 number: 7,
 title: "Room 7",
 subtitle: "Upper level family",
 view: "Garden view",
 level: "Upper level",
 stay: "Twin or family",
 capacity: "Sleeps up to 4",
 beds: "2 double beds",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Twin", "R 1 000"],
 ["Family of 4", "R 1 300"]
 ],
 tags: ["garden", "upper", "family"],
 summary:
 "Upper-level garden-view room with a balcony, twin sharing or a family of four.",
 features: [
 "En-suite shower",
 "Balcony with table and chairs"
 ],
 images: ["room-7-2", "room-7-6", "room-7-5", "room-7-3", "room-7-4", "room-7-1"]
 },
 {
 number: 8,
 title: "Room 8",
 subtitle: "Upper level family",
 view: "Garden view",
 level: "Upper level",
 stay: "Twin or family",
 capacity: "Sleeps up to 4",
 beds: "2 double beds",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Twin", "R 1 000"],
 ["Family of 4", "R 1 300"]
 ],
 tags: ["garden", "upper", "family"],
 summary:
 "Garden-view upper-level room with balcony seating, twin sharing or family of four.",
 features: [
 "En-suite shower",
 "Balcony with table and chairs"
 ],
 images: ["room-8-2", "room-8-4", "room-8-5", "room-8-1", "room-8-3"]
 },
 {
 number: 9,
 title: "Room 9",
 subtitle: "Sea view balcony",
 view: "Side sea view",
 level: "Upper level",
 stay: "Single or couple",
 capacity: "Sleeps 1-2",
 beds: "1 double bed",
 rate: "from R 850",
 pricing: [
 ["Single", "R 850"],
 ["Couple", "R 950"],
 ["Breakfast", "+R 150 pp"]
 ],
 tags: ["sea", "upper"],
 summary:
 "Upper-level double with a side sea view from the balcony, a quiet, romantic choice.",
 features: [
 "En-suite shower",
 "Balcony with table and chairs"
 ],
 images: ["room-9-2", "room-9-6", "room-9-4", "room-9-1", "room-9-3", "room-9-5"]
 }
];

const roomsGrid = document.querySelector("#rooms-grid");
const filterButtons = document.querySelectorAll("[data-filter]");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
const lightboxCount = lightbox?.querySelector(".lightbox-count");
const lightboxPrev = lightbox?.querySelector("[data-lightbox-prev]");
const lightboxNext = lightbox?.querySelector("[data-lightbox-next]");
const lightboxSwipeArea = lightbox?.querySelector(".lightbox-frame");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const siteHeader = document.querySelector("[data-site-header]");
const stickyCta = document.querySelector("[data-sticky-cta]");
const reviewTrack = document.querySelector("[data-review-track]");

const reviews = [
 { name: "Thandi M.", place: "Couple stay, Anstey's Beach", when: "2 weeks ago", rating: 5, body: "A home away from home. Warm welcome, comfortable rooms, and a host who actually cares about the stay." },
 { name: "James R.", place: "Solo working trip, Durban", when: "1 month ago", rating: 5, body: "Quiet, clean and perfectly located. The Wi-Fi held up for two days of meetings and the beach was thirty seconds out the door." },
 { name: "Sarah W.", place: "Family of four", when: "3 weeks ago", rating: 5, body: "Spotless, safe, and beachfront. The kids loved running across to Anstey's first thing in the morning. We'll be back." },
 { name: "David P.", place: "Returning guest", when: "1 month ago", rating: 5, body: "Third stay now. Winston remembers your name, your room is always ready, and you can hear the surf from bed." },
 { name: "Nomvula K.", place: "Couple, weekend break", when: "6 weeks ago", rating: 5, body: "Honest rates, honest people, real ocean. The Beachhouse pub across the road sealed it for us." },
 { name: "Mark T.", place: "Surf trip", when: "2 months ago", rating: 5, body: "Five minute drive to Cave Rock, two minute walk to Anstey's. Secure parking for the boards and the car. Easy stay." },
 { name: "Lerato S.", place: "Whale-watching week", when: "3 months ago", rating: 5, body: "Stayed during whale season. Watched them from the boardwalk most mornings. Rooms were quiet and the breakfast was lovely." },
 { name: "Ben H.", place: "Couple stay", when: "2 months ago", rating: 5, body: "Felt like a small boutique, priced like a guesthouse. Air-con worked, fridge stocked, room was immaculate." },
 { name: "Andrea V.", place: "Family of five", when: "4 months ago", rating: 5, body: "Room 6 fit all of us with room to spare. The kids were across at the tidal pools every day. Highly recommend." },
 { name: "Sipho N.", place: "Working remotely", when: "3 weeks ago", rating: 5, body: "Quiet during the day, surf at night. Private entrance means coming and going without fuss. Honest direct booking." },
 { name: "Linda B.", place: "Couple, anniversary", when: "5 months ago", rating: 5, body: "Room 9 balcony at sunrise. That's the memory. Winston went out of his way to make it special." },
 { name: "Priya G.", place: "Solo traveller", when: "2 weeks ago", rating: 5, body: "Felt completely safe as a solo traveller. Electric gate, friendly host, beach across the road. Will recommend to friends." }
];

const googleSvg = `
 <svg viewBox="0 0 48 48" aria-hidden="true">
 <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
 <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
 <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
 <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
 </svg>
`;

function renderReviews() {
 if (!reviewTrack) return;
 const cardHtml = (r) => {
 const initial = r.name.trim().charAt(0).toUpperCase();
 const stars = "&starf;".repeat(r.rating);
 return `
 <article class="review-card">
 <div class="review-head">
 <span class="reviewer-avatar" aria-hidden="true">${initial}</span>
 <div class="reviewer-meta">
 <strong>${r.name}</strong>
 <span>${r.place} &middot; ${r.when}</span>
 </div>
 <span class="review-source" aria-label="Posted on Google">${googleSvg}</span>
 </div>
 <span class="stars" aria-label="${r.rating} out of 5 stars">${stars}</span>
 <p>${r.body}</p>
 </article>
 `;
 };
 const html = reviews.map(cardHtml).join("");
 reviewTrack.innerHTML = html + html;
}

let activeGallery = [];
let activeGalleryIndex = 0;
let lastLightboxTrigger = null;
let swipeStartX = 0;
let swipeStartY = 0;
let swipeDeltaX = 0;
let swipeDeltaY = 0;
let swipePointerId = null;
let suppressLightboxClick = false;
let swipeAnimating = false;

const imagePath = (id) => `assets/images/rooms/${id}.jpg`;

function getRoomGallery(name) {
 const roomNumber = Number(name?.replace("room-", ""));
 const room = rooms.find((item) => item.number === roomNumber);

 if (!room) return [];

 return room.images.map((image, index) => ({
 src: imagePath(image),
 alt: `${room.title}, ${room.subtitle}: photo ${index + 1}`
 }));
}

function getDomGallery(name) {
 if (!name) return [];

 return [...document.querySelectorAll(`[data-gallery="${name}"][data-lightbox]`)]
 .sort((a, b) => Number(a.dataset.galleryIndex || 0) - Number(b.dataset.galleryIndex || 0))
 .map((trigger) => ({
 src: trigger.dataset.lightbox,
 alt:
 trigger.querySelector("img")?.alt ||
 trigger.getAttribute("aria-label") ||
 "4Shore Guesthouse photo"
 }));
}

function getGallery(name, fallback) {
 if (name?.startsWith("room-")) {
 const roomGallery = getRoomGallery(name);
 if (roomGallery.length) return roomGallery;
 }

 const domGallery = getDomGallery(name);
 return domGallery.length ? domGallery : [fallback];
}

function renderRooms(filter = "all") {
 if (!roomsGrid) return;

 const visibleRooms = rooms.filter(
 (room) => filter === "all" || room.tags.includes(filter)
 );

 roomsGrid.innerHTML = visibleRooms
	 .map((room) => {
 const meta = [room.view, room.level, room.capacity, room.beds, ...room.features]
 .map((item) => `<li>${item}</li>`)
 .join("");
 // Build a 4-up thumbnail strip from the rest of the room images.
 const thumbs = room.images
 .slice(1, 5)
 .map((image, thumbIndex) => `
 <button
 class="room-thumb"
 type="button"
 data-gallery="room-${room.number}"
 data-gallery-index="${thumbIndex + 1}"
 data-lightbox="${imagePath(image)}"
 aria-label="Open ${room.title} photo ${thumbIndex + 2}"
 >
 <img src="${imagePath(image)}" alt="${room.title} photo ${thumbIndex + 2}" loading="lazy">
 </button>
 `)
 .join("");

 return `
	 <article class="room-card">
 <button class="room-media" type="button" data-gallery="room-${room.number}" data-gallery-index="0" data-lightbox="${imagePath(room.images[0])}" aria-label="Open ${room.title} photo gallery">
 <img src="${imagePath(room.images[0])}" alt="${room.title}, ${room.subtitle}" loading="lazy">
 <span class="room-badge">${room.subtitle}</span>
 </button>
 <div class="room-thumbs">${thumbs}</div>
 <div class="room-body">
 <div class="room-title">
 <h3>${room.title}</h3>
 <span class="room-rate">${room.rate}</span>
 </div>
 <p class="room-stay">${room.stay} &middot; ${room.capacity}</p>
 <p class="room-summary">${room.summary}</p>
 <ul class="room-meta">${meta}</ul>
 <div class="room-actions">
	 <a class="button primary" href="#availability-form" data-room-request="${room.number}">Request ${room.title}</a>
 <button class="button ghost" type="button" data-gallery="room-${room.number}" data-gallery-index="0" data-lightbox="${imagePath(room.images[0])}">View all photos</button>
 </div>
 </div>
 </article>
 `;
 })
 .join("");

}

function renderLightboxImage() {
 if (!lightboxImage || !activeGallery.length) return;

 const item = activeGallery[activeGalleryIndex];
 lightboxImage.src = item.src;
 lightboxImage.alt = item.alt;

 if (lightboxCaption) {
 lightboxCaption.textContent = item.alt;
 }
 if (lightboxCount) {
 lightboxCount.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
 }

 const hasMultiple = activeGallery.length > 1;
 lightboxPrev?.toggleAttribute("hidden", !hasMultiple);
 lightboxNext?.toggleAttribute("hidden", !hasMultiple);
}

function openLightbox(src, alt = "4Shore Guesthouse photo", galleryName, index = 0, trigger = null) {
	 if (!lightbox || !lightboxImage) return;

 const fallback = { src, alt };
 activeGallery = getGallery(galleryName, fallback);
 activeGalleryIndex = Math.max(0, Number(index) || 0);

 if (!activeGallery[activeGalleryIndex]?.src) {
 activeGalleryIndex = Math.max(
 0,
 activeGallery.findIndex((item) => item.src === src)
 );
 }
	 if (activeGalleryIndex < 0) activeGalleryIndex = 0;

	 lastLightboxTrigger = trigger;
	 resetLightboxSwipe();
	 renderLightboxImage();
	 lightbox.hidden = false;
	 document.body.classList.add("lightbox-open");
 lightboxNext?.focus();
}

function closeLightbox() {
 if (!lightbox || !lightboxImage) return;
	 lightbox.hidden = true;
	 lightboxImage.removeAttribute("src");
	 activeGallery = [];
	 activeGalleryIndex = 0;
	 resetLightboxSwipe();
	 document.body.classList.remove("lightbox-open");
	 lastLightboxTrigger?.focus();
	 lastLightboxTrigger = null;
}

function moveLightbox(direction) {
		 if (!activeGallery.length) return;
		 activeGalleryIndex =
		 (activeGalleryIndex + direction + activeGallery.length) % activeGallery.length;
		 renderLightboxImage();
}

function setLightboxSwipeOffset(offset = 0, isDragging = false) {
		 if (!lightboxSwipeArea) return;
		 lightboxSwipeArea.style.setProperty("--swipe-x", `${offset}px`);
		 lightboxSwipeArea.classList.toggle("is-swiping", isDragging);
}

function resetLightboxSwipe(clearVisual = true) {
		 swipeStartX = 0;
		 swipeStartY = 0;
		 swipeDeltaX = 0;
		 swipeDeltaY = 0;
		 swipePointerId = null;
		 if (clearVisual) {
		 swipeAnimating = false;
		 lightboxSwipeArea?.classList.remove("is-swiping", "is-changing", "is-resetting");
		 setLightboxSwipeOffset(0, false);
		 }
}

function beginLightboxSwipe(x, y, pointerId = null) {
		 if (activeGallery.length <= 1 || swipeAnimating) return;
		 swipeStartX = x;
		 swipeStartY = y;
		 swipeDeltaX = 0;
		 swipeDeltaY = 0;
		 swipePointerId = pointerId;
}

function updateLightboxSwipe(x, y, pointerId = null) {
		 if (swipePointerId !== pointerId || activeGallery.length <= 1 || swipeAnimating) return false;
		 swipeDeltaX = x - swipeStartX;
		 swipeDeltaY = y - swipeStartY;

		 const horizontalDistance = Math.abs(swipeDeltaX);
		 const verticalDistance = Math.abs(swipeDeltaY);
		 const isHorizontalDrag = horizontalDistance > 6 && horizontalDistance > verticalDistance;

		 if (isHorizontalDrag) {
		 const maxOffset = Math.min(window.innerWidth * 0.28, 180);
		 const resistedOffset =
		 Math.sign(swipeDeltaX) * Math.min(horizontalDistance, maxOffset);
		 setLightboxSwipeOffset(resistedOffset, true);
		 }

		 return isHorizontalDrag;
}

function animateLightboxSwipeChange(direction) {
		 if (!lightboxSwipeArea || swipeAnimating) {
		 moveLightbox(direction);
		 return;
		 }

		 swipeAnimating = true;
		 lightboxSwipeArea.classList.remove("is-swiping");
		 lightboxSwipeArea.classList.add("is-changing");
		 lightboxSwipeArea.style.setProperty("--swipe-x", `${direction > 0 ? -90 : 90}px`);

		 window.setTimeout(() => {
		 lightboxSwipeArea.classList.add("is-resetting");
		 lightboxSwipeArea.style.setProperty("--swipe-x", `${direction > 0 ? 90 : -90}px`);
		 moveLightbox(direction);

		 window.requestAnimationFrame(() => {
		 lightboxSwipeArea.classList.remove("is-resetting");
		 lightboxSwipeArea.style.setProperty("--swipe-x", "0px");

		 window.setTimeout(() => {
		 lightboxSwipeArea.classList.remove("is-changing");
		 swipeAnimating = false;
		 }, 220);
		 });
		 }, 120);
}

function finishLightboxSwipe(pointerId = null) {
		 if (swipePointerId !== pointerId || swipeAnimating) return;

		 const horizontalDistance = Math.abs(swipeDeltaX);
		 const verticalDistance = Math.abs(swipeDeltaY);
		 const isHorizontalSwipe =
		 horizontalDistance >= 48 && horizontalDistance > verticalDistance * 1.25;

		 if (isHorizontalSwipe) {
		 animateLightboxSwipeChange(swipeDeltaX < 0 ? 1 : -1);
		 suppressLightboxClick = true;
		 window.setTimeout(() => {
		 suppressLightboxClick = false;
		 }, 0);
		 resetLightboxSwipe(false);
		 return;
		 }

		 resetLightboxSwipe();
}

function setFormStatus(form, message, state = "") {
	const status = form.querySelector("[data-form-status]");
	if (!status) return;
	status.textContent = message;
	status.dataset.state = state;
}

function isStaticPreview() {
	const hostname = window.location.hostname;
	return (
		window.location.protocol === "file:" ||
		hostname === "localhost" ||
		hostname === "127.0.0.1" ||
		hostname === "0.0.0.0"
	);
}

function getFormValue(form, fieldName) {
	const field = form.elements[fieldName];
	if (!field) return "";
	return String(field.value || "").trim();
}

function buildEnquiryPayload(form) {
	return {
		"form-name": "guesthouse-enquiry",
		subject: "4Shore Guesthouse availability enquiry",
		bot_field: "",
		guest_name: getFormValue(form, "guest_name"),
		guest_email: getFormValue(form, "guest_email"),
		guest_phone: getFormValue(form, "guest_phone"),
		guests: getFormValue(form, "guests"),
		check_in: getFormValue(form, "check_in"),
		check_out: getFormValue(form, "check_out"),
		stay_purpose: getFormValue(form, "stay_purpose"),
		message: getFormValue(form, "message")
	};
}

function clearEnquiryField(form, fieldName) {
	const field = form.elements[fieldName];
	if (!field) return;

	if (typeof field.length === "number" && !field.type) {
		[...field].forEach((item) => {
			if (document.activeElement !== item) {
				item.checked = false;
			}
		});
		return;
	}

	if (document.activeElement === field) return;

	if (field.type === "checkbox" || field.type === "radio") {
		field.checked = false;
	} else {
		field.value = "";
	}
}

function clearEnquiryFields(form) {
	[
		"bot_field",
		"guest_name",
		"guest_email",
		"guest_phone",
		"guests",
		"check_in",
		"check_out",
		"stay_purpose",
		"message"
	].forEach((fieldName) => {
		clearEnquiryField(form, fieldName);
	});
}

function submitEnquiryToNetlify(form, frameName) {
	const transportForm = document.createElement("form");
	transportForm.method = "POST";
	transportForm.action = form.getAttribute("action") || "/";
	transportForm.hidden = true;

	if (frameName) {
		transportForm.target = frameName;
	}

	Object.entries(buildEnquiryPayload(form)).forEach(([name, value]) => {
		const input = document.createElement("input");
		input.type = "hidden";
		input.name = name;
		input.value = value;
		transportForm.append(input);
	});

	document.body.append(transportForm);
	transportForm.submit();
	window.setTimeout(() => transportForm.remove(), 1500);
}

function formatDateValue(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function getNextDateValue(dateValue) {
	if (!dateValue) return "";
	const [year, month, day] = dateValue.split("-").map(Number);
	if (!year || !month || !day) return "";
	const date = new Date(year, month - 1, day);
	date.setDate(date.getDate() + 1);
	return formatDateValue(date);
}

function setupEnquiryDateValidation(form) {
	const checkIn = form.elements.check_in;
	const checkOut = form.elements.check_out;
	if (!checkIn || !checkOut) return;

	const today = formatDateValue(new Date());
	checkIn.min = today;
	checkOut.min = today;

	const updateDateLimits = () => {
		const minimumCheckout = getNextDateValue(checkIn.value) || today;
		checkOut.min = minimumCheckout;

		if (checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
			checkOut.setCustomValidity("Choose a check-out date after check-in.");
		} else {
			checkOut.setCustomValidity("");
		}
	};

	checkIn.addEventListener("input", updateDateLimits);
	checkOut.addEventListener("input", updateDateLimits);
	form.addEventListener("reset", () => window.setTimeout(updateDateLimits, 0));
	updateDateLimits();
}

function prefillRoomInterest(roomNumber) {
	const message = document.querySelector('[data-enquiry-form] textarea[name="message"]');
	if (!message || !roomNumber) return;

	const roomNote = `Interested in Room ${roomNumber}.`;
	const currentMessage = message.value.trim();
	if (currentMessage.includes(roomNote)) return;

	message.value = currentMessage ? `${roomNote}\n\n${currentMessage}` : roomNote;
	message.dispatchEvent(new Event("input", { bubbles: true }));
}

// ---------- Scroll reveal ----------

let revealObserver = null;
function setupReveal(nodes) {
 if (!("IntersectionObserver" in window)) {
 nodes.forEach((node) => node.classList.add("is-visible"));
 return;
 }

 if (!revealObserver) {
 revealObserver = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add("is-visible");
 revealObserver.unobserve(entry.target);
 }
 });
 },
 { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
 );
 }

 nodes.forEach((node) => revealObserver.observe(node));
}

// ---------- Header transparency on scroll ----------

function updateHeader() {
 if (!siteHeader) return;
 const threshold = 80;
 if (window.scrollY > threshold) {
 siteHeader.classList.remove("is-transparent");
 } else {
 siteHeader.classList.add("is-transparent");
 }
}

// ---------- Sticky mobile CTA on scroll past hero ----------

function updateStickyCta() {
 if (!stickyCta) return;
 // Show once we are well past the hero (where the in-hero CTAs leave the viewport).
 const showAt = Math.max(window.innerHeight * 0.6, 480);
 const isShown = window.scrollY > showAt;
 stickyCta.classList.toggle("is-visible", isShown);
 document.body.classList.toggle("has-sticky-cta", isShown);
}

// ---------- Hero parallax (ambient) ----------

const heroMedia = document.querySelector(".hero-media");
const heroSection = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateHeroParallax() {
 if (!heroMedia || !heroSection || prefersReducedMotion) return;
 const rect = heroSection.getBoundingClientRect();
 if (rect.bottom < -120 || rect.top > window.innerHeight) return;
 // Translate the media slower than the section scrolls, creating subtle parallax depth.
 const offset = Math.max(-200, rect.top * 0.32);
 heroMedia.style.setProperty("--parallax-y", `${offset}px`);
}

// ---------- Init ----------

renderRooms();
renderReviews();
setupReveal(document.querySelectorAll(".reveal"));
updateHeader();
updateStickyCta();

window.addEventListener("scroll", () => {
 updateHeader();
 updateStickyCta();
 updateHeroParallax();
}, { passive: true });

window.addEventListener("resize", updateStickyCta, { passive: true });
updateHeroParallax();

filterButtons.forEach((button) => {
 button.addEventListener("click", () => {
 filterButtons.forEach((item) => item.classList.remove("active"));
 button.classList.add("active");
 renderRooms(button.dataset.filter);
 });
});

document.addEventListener("click", (event) => {
	 if (suppressLightboxClick) {
	 event.preventDefault();
	 return;
	 }

		 const roomRequest = event.target.closest("[data-room-request]");
		 if (roomRequest) {
		 prefillRoomInterest(roomRequest.dataset.roomRequest);
	 return;
	 }

	 const galleryOpener = event.target.closest("[data-gallery-open]");
 if (galleryOpener) {
 const name = galleryOpener.dataset.galleryOpen;
 const items = getDomGallery(name);
 if (items.length) {
 openLightbox(items[0].src, items[0].alt, name, 0, galleryOpener);
 }
 return;
 }

 const trigger = event.target.closest("[data-lightbox]");
 if (trigger) {
 const image = trigger.querySelector("img");
 openLightbox(
 trigger.dataset.lightbox,
 image?.alt || trigger.getAttribute("aria-label"),
 trigger.dataset.gallery,
 trigger.dataset.galleryIndex,
 trigger
 );
 }

 if (event.target.matches(".lightbox, .lightbox-close")) {
 closeLightbox();
 }
 if (event.target.closest("[data-lightbox-prev]")) {
 moveLightbox(-1);
 }
 if (event.target.closest("[data-lightbox-next]")) {
 moveLightbox(1);
	}
});

lightboxSwipeArea?.addEventListener("pointerdown", (event) => {
	 if (event.target.closest("button")) return;
	 beginLightboxSwipe(event.clientX, event.clientY, event.pointerId);
	 lightboxSwipeArea.setPointerCapture?.(event.pointerId);
});

lightboxSwipeArea?.addEventListener("pointermove", (event) => {
		 if (updateLightboxSwipe(event.clientX, event.clientY, event.pointerId)) {
		 event.preventDefault();
		 }
});

lightboxSwipeArea?.addEventListener("pointerup", (event) => {
	 finishLightboxSwipe(event.pointerId);
});

lightboxSwipeArea?.addEventListener("pointercancel", resetLightboxSwipe);

if (!("PointerEvent" in window)) {
	 lightboxSwipeArea?.addEventListener("touchstart", (event) => {
	 const touch = event.changedTouches[0];
	 if (!touch) return;
	 beginLightboxSwipe(touch.clientX, touch.clientY);
	 }, { passive: true });

	 lightboxSwipeArea?.addEventListener("touchmove", (event) => {
	 const touch = event.changedTouches[0];
	 if (!touch) return;
	 updateLightboxSwipe(touch.clientX, touch.clientY);
	 }, { passive: true });

	 lightboxSwipeArea?.addEventListener("touchend", () => {
	 finishLightboxSwipe();
	 }, { passive: true });
	 lightboxSwipeArea?.addEventListener("touchcancel", resetLightboxSwipe, { passive: true });
}

document.addEventListener("keydown", (event) => {
 if (event.key === "Escape") {
 closeLightbox();
 document.body.classList.remove("nav-open");
 navToggle?.setAttribute("aria-expanded", "false");
 }
 if (!lightbox?.hidden && event.key === "ArrowLeft") {
 moveLightbox(-1);
 }
 if (!lightbox?.hidden && event.key === "ArrowRight") {
 moveLightbox(1);
 }
});

document.querySelectorAll("[data-enquiry-form]").forEach((form) => {
	clearEnquiryFields(form);
	window.setTimeout(() => clearEnquiryFields(form), 250);
	setupEnquiryDateValidation(form);

	if (new URLSearchParams(window.location.search).get("sent") === "1") {
		setFormStatus(form, "Thanks, your enquiry has been sent. Winston will reply as soon as possible.", "success");
	}

	const submitButton = form.querySelector('button[type="submit"]');
	const frameName = form.getAttribute("target");
	const submitFrame = frameName ? document.querySelector(`iframe[name="${frameName}"]`) : null;
	let submitTimeout = null;

	submitFrame?.addEventListener("load", () => {
		if (form.dataset.submitting !== "true") return;
		delete form.dataset.submitting;
		window.clearTimeout(submitTimeout);
		submitButton?.removeAttribute("disabled");
		form.reset();
		setFormStatus(form, "Thanks, your enquiry has been sent. Winston will reply as soon as possible.", "success");
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (form.dataset.submitting === "true") return;

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		if (getFormValue(form, "bot_field")) {
			form.reset();
			setFormStatus(form, "Thanks, your enquiry has been sent. Winston will reply as soon as possible.", "success");
			return;
		}

		if (isStaticPreview()) {
			setFormStatus(form, "Preview only: Netlify will send this form on the live site.", "preview");
			return;
		}

		form.dataset.submitting = "true";
		submitButton?.setAttribute("disabled", "");
		setFormStatus(form, "Sending your enquiry...", "sending");
		submitEnquiryToNetlify(form, frameName);

		submitTimeout = window.setTimeout(() => {
			if (form.dataset.submitting !== "true") return;
			delete form.dataset.submitting;
			submitButton?.removeAttribute("disabled");
			setFormStatus(
				form,
				"The form is taking longer than expected. Please try again, or call +27 83 254 4825.",
				"error"
			);
		}, 12000);
	});
});

navToggle?.addEventListener("click", () => {
 const isOpen = document.body.classList.toggle("nav-open");
 navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
 if (event.target.matches("a")) {
 document.body.classList.remove("nav-open");
 navToggle?.setAttribute("aria-expanded", "false");
 }
});
