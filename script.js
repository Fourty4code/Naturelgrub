// ----------- Contact Form Validation -----------
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMsg = document.getElementById('formMsg');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please fill out all required fields.';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please enter a valid email address.';
        return;
    }

    // Simulate success (You can replace this with actual form processing)
    formMsg.style.color = 'green';
    formMsg.textContent = 'Thank you! Your message has been sent.';

    // Clear form
    name.value = '';
    email.value = '';
    message.value = '';
});

// ----------- Image Slider -----------
const sliderImages = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with your real image filenames
let currentImgIndex = 0;
const sliderElement = document.getElementById('slider-img');

function updateSlider() {
    currentImgIndex = (currentImgIndex + 1) % sliderImages.length;
    sliderElement.src = sliderImages[currentImgIndex];
}

// Auto-change image every 4 seconds
setInterval(updateSlider, 4000);