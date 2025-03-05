const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

// Handle hover effects
stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        updateStars(rating);
    });

    star.addEventListener('mouseout', () => {
        updateStars(currentRating);
    });

    star.addEventListener('click', () => {
        currentRating = parseInt(star.getAttribute('data-value'));
        ratingValue.textContent = currentRating;
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= rating) {
            star.classList.add('active');
            star.classList.remove('selected');
        } else {
            star.classList.remove('active');
        }
    });
}
