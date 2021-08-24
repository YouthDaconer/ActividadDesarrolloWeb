var lastScrollTop = 0;

window.onresize = () => {
  if (window.innerWidth > 1140) {
    slideUp('navbar');
  }
};

window.onscroll = () => {
  if (window.innerWidth < 1140) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st == 0) {
      slideUp('footer');
      slideUp('navbar');
    } else if (st > lastScrollTop) {
      // downscroll
      slideUp('footer');
      slideDown('navbar');
    } else {
      // upscroll
      slideUp('navbar');
      slideDown('footer');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }
};

function slideUp(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 0.5s ease-in-out";
  elem.style.opacity = '1';
}

function slideDown(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 0.5s ease-in-out";
  elem.style.opacity = '0';
}

// Eventos del navbar

const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}