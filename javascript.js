document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.getElementById('navToggle');
    var closeSidebar = document.getElementById('closeSidebar');
    var mobileNavLinks = document.getElementById('mobileNavLinks');
    var overlay = document.getElementById('overlay');

    // Function to open the sidebar
    function openSidebar() {
        mobileNavLinks.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    }

    // Function to close the sidebar
    function closeSidebarFunc() {
        mobileNavLinks.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }

    navToggle.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSidebarFunc);
    overlay.addEventListener('click', closeSidebarFunc);
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__pulse');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => observer.observe(element));
  });

