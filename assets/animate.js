
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

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


