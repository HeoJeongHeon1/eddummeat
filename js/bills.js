const receiptItems = document.querySelectorAll('.receipt-list li');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 600); // 순차적으로 등장 (0.3초 간격)
    }
  });
}, {
  threshold: 0.6
});

receiptItems.forEach(item => {
  observer.observe(item);
});
