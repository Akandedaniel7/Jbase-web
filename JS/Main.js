/* =============== HEADER  ============== */
const nav = document.querySelector("nav");
const a = document.querySelector("a");

const sticky = nav.offsetTop;
// alert(window.pageYOffset);

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 200) {
    nav.style.position = "fixed";
    a.style.color = "black";
  } else {
    nav.style.position = "sticky";
    a.style.color = "white";
  }
});

// /* =============== TYPE JS ============== */
let typpe = new Typed(".autotype", {
  strings: [
    "Blogger",
    "Developer",
    "Social Media Marketer",
    "Freelancer",
    "IT Support Manager",
  ],
  typeSpeed: 21,
  backSpeed: 15,
  loop: true,
});

/* ============ SIDE MENU =========== */

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-100%";
}
