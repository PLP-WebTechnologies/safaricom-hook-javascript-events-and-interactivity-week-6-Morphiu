const frm = document.getElementById('registration-form');

frm.addEventListener('submit', function (event) {
    event.preventDefault();

    let Valid = true;

    // Username Validation
    const usr = document.getElementById('username');
    const usrError = document.getElementById('username-error');

    if (usr.value.trim().length < 3) {
        usrError.textContent = "Username must be longer than 3 characters"
        Valid = false;
    } else {
        usrError.textContent = "";
    }

    // Email Validation
    const eml = document.getElementById('email');
    const emlError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //text@text.domain

    if (!emailPattern.test(eml.value.trim())) {
        emlError.textContent = "Enter a valid email address.";
        Valid = false;
    } else {
        emlError.textContent = '';
    }

    // Password Validation
    const pasd = document.getElementById('password');
    const pasdError = document.getElementById('password-error');

    if (pasd.value.trim().length < 8 || !/[A-Z]/.test(pasd) || /\d/.test(pasd)) {
        pasdError.textContent = "Password must be at least  8 characters long and contain at least one uppercase letter and one number";
        Valid = false;
    } else {
        pasdError.textContent = ' ';
    }

    if (Valid) {
        alert('Registration Successful');
        frm.reset();
    }
})

// Background change button

function toggleColor() {
    const body = document.body;
    if (body.style.backgroundColor == 'grey') {
        body.style.backgroundColor = 'Lightblue'
    } else {
        body.style.backgroundColor = 'grey'
    }
}

// Slider to increase text size
function changesize() {
    const slider = document.getElementById('sizeSlider')
    const paragraph = document.getElementById('my-paragraph')
    paragraph.style.fontSize = slider.value + 'px';
}

// Modal
const modal = document.getElementById('mymodal');
const open = document.getElementById('openmodal');
const span = document.getElementsByClassName('close');

open.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}