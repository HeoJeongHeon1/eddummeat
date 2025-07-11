document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('menuPopup');
  const openBtn = document.querySelector('.view-all-menu-btn');
  const closeBtn = document.querySelector('.popup-close');

  if (popup && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      popup.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  } else {
    console.warn("menuPopup 관련 요소를 찾지 못했습니다.");
  }
});
