document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const imageHeight = document.querySelector('.fixed-image').offsetHeight;
    const btnPlayImg = document.querySelector('.btn-play-img');
    const btnPlayNav = document.querySelector('.btn-play');

    // Determine the scroll threshold
    const threshold = imageHeight * 0.5; // Change this value to adjust when the transition happens

    if (btnPlayImg) {
        // Calculate opacity and position for img1 button
        const offset = Math.max(0, (scrollPosition / imageHeight) * 100);
        btnPlayImg.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        btnPlayImg.style.opacity = 1 - (scrollPosition / threshold);

        // Show img1 button completely when hovered
        btnPlayImg.addEventListener('mouseover', function() {
            this.style.opacity = 1;
        });
        btnPlayImg.addEventListener('mouseout', function() {
            this.style.opacity = 1 - (scrollPosition / threshold);
        });
    }

    if (btnPlayNav) {
        // Calculate opacity for navbar button
        if (scrollPosition > threshold) {
            btnPlayNav.style.opacity = Math.min((scrollPosition - threshold) / (imageHeight - threshold), 1);
        } else {
            btnPlayNav.style.opacity = 0;
        }
    }
});

// Show navbar button completely when hovered
const btnPlayNav = document.querySelector('.btn-play');
if (btnPlayNav) {
    btnPlayNav.addEventListener('mouseover', function() {
        this.style.opacity = 1;
    });

    btnPlayNav.addEventListener('mouseout', function() {
        const scrollPosition = window.scrollY;
        const imageHeight = document.querySelector('.fixed-image').offsetHeight;
        const threshold = imageHeight * 0.5; // The same threshold used for the scroll

        if (scrollPosition > threshold) {
            this.style.opacity = Math.min((scrollPosition - threshold) / (imageHeight - threshold), 1);
        } else {
            this.style.opacity = 0;
        }
    });
}