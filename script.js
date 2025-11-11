console.log("Bootstrap Internship Script Loaded Successfully!");

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
