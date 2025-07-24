  function activateMobileLeft() {
    const targets = document.querySelectorAll('.mobile-left');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-mobile-left');
        }
      });
    });

    targets.forEach(target => observer.observe(target));
  }

  window.addEventListener('DOMContentLoaded', activateMobileLeft);
