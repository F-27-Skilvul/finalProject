// Navbar
const navbar = document.querySelector('.bg-white');
const navbarHeight = navbar.offsetHeight;

function toggleNavbarOnScroll() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'shadow-md', 'blur-navbar');
  } else {
    navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'shadow-md', 'blur-navbar');
  }
}

window.addEventListener('scroll', toggleNavbarOnScroll);
toggleNavbarOnScroll();


//Navbar navigation
document.addEventListener("DOMContentLoaded", function () {
  // Button user menu dan dropdown
  const userMenuButton = document.getElementById("user-menu-button");
  const userDropdown = document.getElementById("user-dropdown");

  userMenuButton.addEventListener("click", function () {
    userDropdown.classList.toggle("hidden");
  });

  // Mobile 
  const mobileMenuButton = document.querySelector("[data-collapse-toggle='navbar-user']");
  const navbarUser = document.getElementById("navbar-user");

  mobileMenuButton.addEventListener("click", function () {
    navbarUser.classList.toggle("hidden");
  });
});