(() => {
  const endpoint = "https://formsubmit.co/ajax/hnoliver92@gmail.com";
  const successMessage = "Thanks, your enquiry has been sent. Winston will reply as soon as possible.";
  const activationMessage = "Your enquiry was received by the form service, but the recipient may still need to confirm FormSubmit. Please check hnoliver92@gmail.com for a FormSubmit activation email, or call +27 83 254 4825.";
  const errorMessage = "The form could not send just now. Please try again, or call +27 83 254 4825.";

  function setFormStatus(form, message, state = "") {
    const status = form.querySelector("[data-form-status]");
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  }

  function getValue(form, fieldName) {
    const field = form.elements[fieldName];
    if (!field) return "";
    return String(field.value || "").trim();
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

  function buildPayload(form) {
    const email = getValue(form, "guest_email");

    return new URLSearchParams({
      _subject: "4Shore Guesthouse availability enquiry",
      _template: "table",
      _captcha: "false",
      _replyto: email,
      _honey: getValue(form, "bot_field"),
      name: getValue(form, "guest_name"),
      email,
      phone: getValue(form, "guest_phone"),
      guests: getValue(form, "guests"),
      check_in: getValue(form, "check_in"),
      check_out: getValue(form, "check_out"),
      stay_purpose: getValue(form, "stay_purpose"),
      message: getValue(form, "message"),
      source_page: window.location.href
    });
  }

  async function submitToFormSubmit(form) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: buildPayload(form).toString()
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = data.message || data.error || `Form submission failed with ${response.status}`;
      throw new Error(message);
    }

    const text = JSON.stringify(data).toLowerCase();
    if (text.includes("activate") || text.includes("confirm") || text.includes("not activated")) {
      const activationError = new Error("FormSubmit activation required");
      activationError.activationRequired = true;
      throw activationError;
    }

    return data;
  }

  document.querySelectorAll("[data-enquiry-form]").forEach((form) => {
    form.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (form.dataset.submitting === "true") return;

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        if (getValue(form, "bot_field")) {
          form.reset();
          setFormStatus(form, successMessage, "success");
          return;
        }

        if (isStaticPreview()) {
          setFormStatus(form, "Preview only: the live site will send this form through FormSubmit.", "preview");
          return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        form.dataset.submitting = "true";
        submitButton?.setAttribute("disabled", "");
        setFormStatus(form, "Sending your enquiry...", "sending");

        try {
          await submitToFormSubmit(form);
          form.reset();
          setFormStatus(form, successMessage, "success");
        } catch (error) {
          console.error(error);
          setFormStatus(form, error.activationRequired ? activationMessage : errorMessage, "error");
        } finally {
          delete form.dataset.submitting;
          submitButton?.removeAttribute("disabled");
        }
      },
      true
    );
  });
})();
