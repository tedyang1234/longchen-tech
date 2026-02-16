// main.js
document.addEventListener('DOMContentLoaded', function () {
  // 表单提交处理（静态版：仅提示；未来可接入后端）
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('感谢您的咨询！我们将尽快与您联系。\n\n（注：当前为演示版本，数据未实际提交。如需真实表单，请接入后端服务。）');
      form.reset();
    });
  }

  // 导航高亮
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});