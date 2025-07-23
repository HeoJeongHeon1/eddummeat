document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.slide-target, .fade-target');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('slide-left')) {
          entry.target.classList.add('slide-in-left');
        } else if (entry.target.classList.contains('slide-right')) {
          entry.target.classList.add('slide-in-right');
        } else if (entry.target.classList.contains('slide-top')) {
          entry.target.classList.add('slide-in-top');
        } else if (entry.target.classList.contains('fade-target')) {
          entry.target.classList.add('fade-in');
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});
