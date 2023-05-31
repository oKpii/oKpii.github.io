function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

function easeInOutScroll(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const increment = 8;
    let currentTime = 0;

    const animateScroll = function () {
        currentTime += increment;
        const newPosition = easeInOutQuad(currentTime, startPosition, distance, duration);
        window.scrollTo(0, newPosition);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const targetPosition = section.offsetTop;
    const duration = 1000;

    easeInOutScroll(targetPosition, duration);
}

window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

document.getElementById('scrollToTopButton').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#nav');
});

