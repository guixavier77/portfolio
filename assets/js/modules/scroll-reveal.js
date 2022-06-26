export default function initScrollReveal(){
  window.sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,

  });

  sr.reveal('[data-anime]', {delay: 200});
  sr.reveal(".intervalCardReveal", { 
    rotate: {x: 0,y:20, z:0},

    interval: 400 
  });
}