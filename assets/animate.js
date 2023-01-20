
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
  gsap.to(".staggerItem", {opacity: 0, y: 20})
 gsap.to(".staggerItem", {
  opacity: 1,
   y: 20,
  stagger: { // wrap advanced options in an object
    each: 0.1,
    from: "center",
    grid: "auto",
    ease: "power2.inOut",
    repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
  }
});

}
window.addEventListener("load", (event) => {
  console.log("animate load")
  animateInView()

  staggerGrid()
}, false);
