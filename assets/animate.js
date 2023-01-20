
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;
        gsap.to(elem, {opacity: 0, y: -10});

      gsap.fromTo(elem, {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: 0.3});
    }
  });
}

const animateInView = () =>{
  let options = {
    root: null,
    threshold: 1.0
  }

  let observer = new IntersectionObserver(callback, options);
  
  const items = document.querySelectorAll('.animateInView')
  
  items.forEach((item)=>{
        observer.observe(item)
      })
  
}




const staggerGrid = () =>{
    gsap.registerEffect({
    name: "staggerGrid",
    extendTimeline: true,
    effect: (targets, config) => {
      
      console.log("config", config);    
      
      let animation = gsap.timeline();
      
      let delay = gsap.utils.distribute(config.stagger);
      
      targets.forEach((target, i) => {
        
        let tl = gsap.timeline()
          .to(target, { opacity: 1, duration: 1 }, ">-0.5")        
        
        animation.add(tl, delay(i, target, targets));
      });
      
      return animation;
    }
  });
  
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  
  timeline.staggerGrid(".staggerItem", {
    stagger: {
      each: 0.05,
      from: "center",
       ease: "power2.inOut",
    }
  });


}
window.addEventListener("load", (event) => {
  console.log("animate load")
  animateInView()

  staggerGrid()
}, false);
