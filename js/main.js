// 平滑滚动到目标元素
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // 监听目录链接的点击事件
  const links = document.querySelectorAll('.sidebar ul li a');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });