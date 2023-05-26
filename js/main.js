const playButtonElement = document.querySelector('button.play')
const trailerButtonElement = document.querySelector('button.trailer')

playButtonElement.addEventListener('click', function(){
    window.open('https://github.com/yalealves/movie-landing-page', '_blank');
})

trailerButtonElement.addEventListener('click', function(){
    window.open('https://www.youtube.com/watch?v=VBdmGK4wxzQ', '_blank');
})

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
  
    var tl1 = gsap.timeline();
      
    tl1
    .to('.overlay', {
      duration: 2,
      opacity: 1, 
      delay: 1,
      ease: "power4.out",
    })
    .from(".logo-movie", {
        duration: 2, 
        opacity: 0, 
        y: 400,
        stagger:{each: 0.2},
      ease: "power4.out",
    }, '-=1.0')
    .from("nav", {
      duration: 2, 
      opacity: 0, 
      y: 400,
      stagger:{each: 0.2},
      ease: "back.out(1.7)",
    }, '-=0.5')
    .from(".details", {
      duration: 2, 
      opacity: 0, 
      y: 200,
      stagger:{each: 0.2},
      ease: "back.out(1.7)",
    }, '-=1.7')
      
  });