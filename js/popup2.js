document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("customPopup");
  const closeBtn = document.getElementById("customPopupClose");
  const dontShow = document.getElementById("customDontShow");

  // localStorage 키
  const key = "hideCustomPopupUntil";
  const now = new Date();

  // 저장된 시간이 현재보다 뒤라면 팝업 숨김
  const storedTime = localStorage.getItem(key);
  if (!storedTime || new Date(storedTime) < now) {
    popup.classList.add("active");
  }

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");

    if (dontShow.checked) {
      const expire = new Date();
      expire.setHours(expire.getHours() + 24);
      localStorage.setItem(key, expire.toISOString());
    }
  });
});
