  const popup = document.getElementById('menuPopup');
  const openBtn = document.querySelector('.view-all-menu-btn');
  const closeBtn = document.querySelector('.popup-close');

  openBtn.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
