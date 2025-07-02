
  // EmailJS 초기화 (★ 여기에 본인의 PUBLIC KEY 넣기)
  emailjs.init("C8ofXNuRUsyFrTESn");

  // 버튼 활성/비활성 제어
  const agreeCheckbox = document.getElementById("agree");
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;

  agreeCheckbox.addEventListener("change", function () {
    submitBtn.disabled = !agreeCheckbox.checked;
  });

  // 폼 제출 이벤트
  document.querySelector("#inquiry-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // 체크 안 했을 경우 경고
    if (!agreeCheckbox.checked) {
      alert("개인정보취급방침에 동의해 주세요.");
      return;
    }

    const form = e.target;

    // 파라미터 구성
    const params = {
      name: form.name.value,
      phone: `${form.phone1.value}-${form.phone2.value}-${form.phone3.value}`,
      email: `${form.emailId.value}@${form.emailDomain.value}`,
      store: form.store.value,
      region: form.region.value,
      budget: form.budget.value,
      source: form.source.value,
      age: [...form.querySelectorAll('input[name="age"]:checked')].map(e => e.value).join(', '),
      franchise: form.franchise.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    // EmailJS 전송 (★ 여기에 SERVICE ID, TEMPLATE ID 넣기)
    emailjs.send("service_ssyvqok", "template_ibprkdk", params)
      .then(() => {
        alert("문의가 정상적으로 전송되었습니다.");
        form.reset();
        submitBtn.disabled = true; // 다시 비활성화
      })
      .catch(err => {
        console.error("이메일 전송 실패:", err);
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      });
  });