let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let discountBtn = document.querySelector('#discountBtn')
let infoBtn = document.querySelector('#infoBtn');
let infoBtn2 = document.querySelector('#infoBtn2');
let allPricingBtn = document.querySelector('#allPricingBtn');

function click() {
	alert("You Have Been Gifted a 50% Discount, Your Coupon Code: BossFitness1030. Please Email James, at Jamesthebossfitness@gmail.com or Call 4808853545 to claim Discounted Price!")
}

function click2() {
	alert("For More Information, Please Call or Text James: (480) 885-3545")
}

function click3() {
	alert("For More Information, Please Call or Text James: (480) 885-3545")
}

function click4() {
	alert("For More Information, Please Call or Text James: (480) 885-3545")
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

discountBtn.addEventListener("click", click)
infoBtn.addEventListener("click", click2)
infoBtn2.addEventListener("click", click3)
allPricingBtn.addEventListener("click", click4)