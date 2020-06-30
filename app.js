const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');





//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateY(' + (-size * counter ) + 'px)';




//Button listeners

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;    
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=> {
    
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

    }
});



//2

const middleCarouselSlide = document.querySelector('.middleCarousel-slide');
const middleCarouselImages = document.querySelectorAll('.middleCarousel-slide img');





//Buttons
const middlePrevBtn = document.querySelector('#middlePrevBtn');
const middleNextBtn = document.querySelector('#middleNextBtn');


//middleCounter
let middleCounter = 1;
const middleSize = middleCarouselImages[0].clientWidth;

middleCarouselSlide.style.transform = 'translateY(' + (-middleSize * middleCounter) + 'px)';




//Button listeners

middleNextBtn.addEventListener('click',()=>{
    if(middleCounter >= middleCarouselImages.length -1) return;    
    middleCarouselSlide.style.transition = "transform 0.4s ease-in-out";
    middleCounter ++;
    middleCarouselSlide.style.transform = 'translateY(' + (-middleSize * middleCounter) + 'px)';

});

middlePrevBtn.addEventListener('click',()=>{
    if(middleCounter <= 0) return;
    middleCarouselSlide.style.transition = "transform 0.4s ease-in-out";
    middleCounter --;
    middleCarouselSlide.style.transform = 'translateY(' + (-middleSize * middleCounter) + 'px)';

});

middleCarouselSlide.addEventListener('transitionend',()=> {
    
    if(middleCarouselImages[middleCounter].id === 'middleLastClone'){
        middleCarouselSlide.style.transition = "none";
        middleCounter = middleCarouselImages.length -2;
        middleCarouselSlide.style.transform = 'translateY(' + (-middleSize * middleCounter) + 'px)';

    }
    if(middleCarouselImages[middleCounter].id === 'middleFirstClone'){
        middleCarouselSlide.style.transition = "none";
        middleCounter = middleCarouselImages.length - middleCounter;
        middleCarouselSlide.style.transform = 'translateY(' + (-middleSize * middleCounter) + 'px)';

    }
});




//3


const rightCarouselSlide = document.querySelector('.rightCarousel-slide');
const rightCarouselImages = document.querySelectorAll('.rightCarousel-slide img');





//Buttons
const rightPrevBtn = document.querySelector('#rightPrevBtn');
const rightNextBtn = document.querySelector('#rightNextBtn');


//rightCounter
let rightCounter = 1;
const rightSize = rightCarouselImages[0].clientWidth;

rightCarouselSlide.style.transform = 'translateY(' + (-rightSize * rightCounter) + 'px)';




//Button listeners

rightNextBtn.addEventListener('click',()=>{
    if(rightCounter >= rightCarouselImages.length -1) return;    
    rightCarouselSlide.style.transition = "transform 0.4s ease-in-out";
    rightCounter ++;
    rightCarouselSlide.style.transform = 'translateY(' + (-rightSize * rightCounter) + 'px)';

});

rightPrevBtn.addEventListener('click',()=>{
    if(rightCounter <= 0) return;
    rightCarouselSlide.style.transition = "transform 0.4s ease-in-out";
    rightCounter --;
    rightCarouselSlide.style.transform = 'translateY(' + (-rightSize * rightCounter) + 'px)';

});

rightCarouselSlide.addEventListener('transitionend',()=> {
    
    if(rightCarouselImages[rightCounter].id === 'rightLastClone'){
        rightCarouselSlide.style.transition = "none";
        rightCounter = rightCarouselImages.length -2;
        rightCarouselSlide.style.transform = 'translateY(' + (-rightSize * rightCounter) + 'px)';

    }
    if(rightCarouselImages[rightCounter].id === 'rightFirstClone'){
        rightCarouselSlide.style.transition = "none";
        rightCounter = rightCarouselImages.length - rightCounter;
        rightCarouselSlide.style.transform = 'translateY(' + (-rightSize * rightCounter) + 'px)';

    }
});

