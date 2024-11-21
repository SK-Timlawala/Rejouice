function dispute(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
dispute();


function mouseEffect(){
    var page1Content = document.querySelector(".page1-content");
    var mouse = document.querySelector(".mouse");
    
    page1Content.addEventListener("mousemove", function(e){
        gsap.to(mouse, {
            x: e.clientX,
            y: e.clientY,
        })
    })
    
    
    page1Content.addEventListener("mouseenter", function(){
        gsap.to(mouse,{
            scale: 1,
            opacity: 1,
        })
    })
    
    page1Content.addEventListener("mouseleave", function(){
        gsap.to(mouse, {
            scale: 0,
            opacity: 0,
        })
    })
}

mouseEffect();





// function page2Anim(){
//   gsap.from(".page2 .top h3", {
//     y: 120,
//     stagger: 0.2,
//     duration: 1,
//     trigger: '.page2',
//     scroller: ".main",
//     start: "top 47%",
//     end:"top 46%",
//     markers: true,
//     scrub: 2
//   })
// }

//   page2Anim();


function page2Anim(){
  gsap.to(".page2 .bottom h2", {
    y: 60,
    stagger: 0.25,   
    opacity: 0.2,    
    duration: 5,

    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 20%",
      end: "top 30%",
      scrub: 2
    }
  });
}

page2Anim();



function page4Anim(){
  gsap.from(".page4 .bottom h2", {
    y: 60,
    stagger: 0.25,   
    opacity: 0.2,    
    duration: 5,

    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 20%",
      end: "top 30%",
      scrub: 2
    }
  });
}

page4Anim();





var tl = gsap.timeline()

tl.from("#loader h3",{
  x:50,
  opacity: 0,
  duration: 1,
  stagger:0.5 
})
tl.to("#loader h3",{
  opacity: 0,
  x: -20,
  // duration: 1,
  stagger: 0.1
})


tl.to("#loader", {
  opacity: 0,
})
tl.to("#loader", {
  display: "none",
})



tl.from(".page1 h1 span",{
  y:100,
  opacity: 0,
  stagger: 0.1,
})
 


