const popup    = document.getElementById('popup');
const overlay  = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('popupCloseBtn');
const dontShow = document.getElementById('dontShow24h');

// 24시간 밀리초
const HOUR24 = 24 * 60 * 60 * 1000;
// LocalStorage 키
const KEY = 'popupClosedAt';

// 팝업 열기
function openPopup() {
  popup.style.display   = 'flex';
  overlay.style.display = 'block';
}

// 팝업 닫기
function closePopup() {
  if (dontShow.checked) {
    // 닫을 때 체크되어 있으면 시간 저장
    localStorage.setItem(KEY, Date.now());
  }
  popup.style.display   = 'none';
  overlay.style.display = 'none';
}

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

// 페이지 로드 시 24시간 여부 체크
window.addEventListener('load', () => {
  const closedAt = parseInt(localStorage.getItem(KEY), 10);
  // 저장된 값이 없거나, 24시간이 지났다면 팝업 열기
  if (!closedAt || (Date.now() - closedAt) > HOUR24) {
    // 1초 뒤에 띄우기 (원하시는 시간 조절하세요)
    setTimeout(openPopup, 1000);
  }
});
