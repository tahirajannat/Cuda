document.getElementById('contact-form').addEventListener('submit', (event) => {
    const contactForm = event.target;
    if (!validateContactForm(contactForm)) {
        event.preventDefault();
        displayError(contactForm, 'Invalid input');
    } else {
        const name = contactForm['name'].value;
        const email = contactForm['email'].value;
        const message = contactForm['message'].value;
        console.log('hello');

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
    }
});

// Function to validate email addresses
function isValidEmail(email) {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(String(email).toLowerCase());
}

// Function to validate the contact form
function validateContactForm(contactForm) {
    const name = contactForm['name'].value;
    const email = contactForm['email'].value;
    const message = contactForm['message'].value;

    if (!name || !email || !message) {
        return false;
    }

    if (!isValidEmail(email)) {
        return false;
    }

    return true;
}
