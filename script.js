let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 50%", // when the top of the trigger hits the top of the viewport
    end: "50% 50%", // end after scrolling 500px beyond the start
    //   markers: true,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
  },
});

tl.to("#imgthree", 
{
  bottom: "-5vh",
})
.to("#imgtwo, #imgfour",
{
    bottom: "-10vh",
})
.to("#imgone, #imgfive", 
{
    bottom: "-20vh",
});



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "50% 50%", 
    end: "150% 50%",
    pin: true,
    scrub: 2, 
  },
});

tl2.to("#scroll-1", 
{
  bottom:"60vh",
})
.to("#scroll-1",
{
  opacity:0,
})
.to("#scroll-2",
{
  opacity:1,
},'a')
.to(".phone-img",
{
  x:"-30%",
},'a')
.to("#scroll-2",
{
  bottom:"60vh",
})
.to("#scroll-2",
{
  opacity:0,
})
.to("#scroll-3",
{
  opacity:1,
},'b')
.to(".phone-img",
{
  x:"-57%",
},'b')
.to("#scroll-3",
{
  bottom:"60vh",
})
.to("#scroll-3",
{
  opacity:0,
})
.to("#scroll-4",
{
  opacity:1,
},'c')
.to(".phone-img",
{
  x:"-88%",
},'c');



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});