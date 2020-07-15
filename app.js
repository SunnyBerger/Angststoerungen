var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var counter = 1;
var color1 = "";
var color2 = "";
var color3 = "";


function slideImages(container, type, index) {
    const carouselImages = container.querySelectorAll('.carousel-slide img');
    const size = carouselImages[0].clientWidth;
    container.style.transform = 'translateY(' + (-size * counter) + 'px)';


    if (type === 'prev') {
        if (counter >= carouselImages.length - 1) return;
        container.style.transition = "transform 0.4s ease-in-out";
        counter++;
        container.style.transform = 'translateY(' + (-size * counter - (5 * counter)) + 'px)';
    }

    if (type === 'next') {
        if (counter <= 0) return;
        container.style.transition = "transform 0.4s ease-in-out";
        counter--;
        container.style.transform = 'translateY(' + (-size * counter - (5 * counter)) + 'px)';
    }

    container.addEventListener('transitionend', () => {
        matchColor(index);
        if (carouselImages[counter].id === 'lastClone') {
            container.style.transition = "none";
            counter = carouselImages.length - 2;
            container.style.transform = 'translateY(' + (-size * counter - (5 * counter)) + 'px)';

        }
        if (carouselImages[counter].id === 'firstClone') {
            container.style.transition = "none";
            counter = carouselImages.length - counter;
            container.style.transform = 'translateY(' + (-size * counter) + 'px)';
        }
    });


    function matchColor(index) {
        var color = carouselImages[counter].getAttribute('color');
        var innerActive = document.querySelector("#innerContainer");
        if (index == 0) {
            color1 = color;
        } else if (index == 1) {
            color2 = color;
        } else if (index == 2) {
            color3 = color;
        }

        if ((color1 == color2) && (color1 == color3)) {
            innerActive.classList.add('active');
        } else {
            innerActive.classList.remove('active');
        }
    }
}


// Event listners 

var previousButtons = $$(".prevBtn");
previousButtons.forEach(function(prev) {
    prev.addEventListener('click', function(e) {
        e.preventDefault();
        var container = this.parentElement.querySelector('.carousel-slide');
        var index = this.parentElement.parentElement.getAttribute('data-index');
        slideImages(container, 'prev', index);
    });
});


var nextButtons = $$(".nextBtn");
nextButtons.forEach(function(next) {
    next.addEventListener('click', function(e) {
        e.preventDefault();
        var container = this.parentElement.querySelector('.carousel-slide');
        var index = this.parentElement.parentElement.getAttribute('data-index');
        slideImages(container, 'next', index);
    });
});