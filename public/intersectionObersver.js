document.addEventListener('DOMContentLoaded', () => {
    const observerElements = document.querySelectorAll('.animateOnLoad');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } 
      });
    }, {
      threshold: 0.1
    });
  
    observerElements.forEach((element) => {
      observer.observe(element);
    });
  });