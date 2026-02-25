
document.addEventListener('DOMContentLoaded', () => {
  // 导航高亮：根据当前页面激活对应链接
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // 联系表单提交拦截（静态演示）
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('感谢您的咨询！\n（当前为演示模式，数据未实际发送）');
      this.reset();
    });
  }
});
