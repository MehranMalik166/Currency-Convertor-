/// side bar ka js code ***************************************
//sidbar ka codde ahi

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const openBtn = document.getElementById("mobile-menu-button");
    const closeBtn = document.getElementById("close-sidebar");

    if (openBtn) {
        openBtn.addEventListener("click", function () {
            sidebar.classList.remove("translate-x-full");
            overlay.classList.remove("hidden");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.add("translate-x-full");
            overlay.classList.add("hidden");
        });
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            sidebar.classList.add("translate-x-full");
            overlay.classList.add("hidden");
        });
    }

   ///****************************88********************888 */ 

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'toggle') {
      if (e.target.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  });

  // Page load pe state set karo
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    document.querySelectorAll('#toggle').forEach(el => el.checked = true);
  } else if (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.querySelectorAll('#toggle').forEach(el => el.checked = true);
  }
});