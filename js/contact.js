const form = document.getElementById('inquiry-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!document.getElementById('agree').checked) {
    alert("개인정보취급방침에 동의해 주세요.");
    return;
  }

  emailjs.sendForm('service_ssyvqok', 'template_ibprkdk', form)
    .then(() => {
      alert('성공적으로 전송되었습니다!');
      form.reset();
    }, (error) => {
      console.error('이메일 전송 오류:', error);
      alert('전송에 실패했습니다.');
    });
});
