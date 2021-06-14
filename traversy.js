const toggle= document.querySelector('.toggle');
const navUl = document.querySelector('.navUl');

var nav = false;
toggle.addEventListener('click',()=>{
  if(nav === false){
    navUl.classList.add('active');
    nav = true;
  } else if(nav === true){
    navUl.classList.remove('active');
    nav = false;
  }
})


window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 150);
})


let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#home",
      markers: true,
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom 10%", // end after scrolling 500px beyond the start
      ease: "power1.inOut"
    }
  });
  tl.from(".main-details", {x:5000, opacity: 0, autoAlpha: 0})
  tl.from(".main-details-heading span", {y:50, opacity: 0, autoAlpha: 0})
  tl.from(".partner-logo", {y:16, autoAlpha: 0})
  tl.from(".button", {scale: 0.3, opacity:0, autoAlpha: 0})

  let time = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#testimonial",
        markers: true,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom 10%", // end after scrolling 500px beyond the start
        ease: "power1.inOut"
      }
    });
    time.from(".testimonial-list", {rotate:-180, opacity: 0, autoAlpha: 0})

    let timel = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: "#team",
          markers: true,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "bottom 10%", // end after scrolling 500px beyond the start
          ease: "power1.inOut"
        }
      });
      timel.from(".team-header", {x:500, opacity: 0, autoAlpha: 0,duration:1})
      timel.from(".team-card", { opacity: 0, autoAlpha: 0})


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1
  });
});
$('.team-card-list').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
        1051:{
            items:1,
        },

    }
})
