/* =============== HEADER  ============== */
window.onscroll = function() {myFunction()};


var header = document.getElementById("header");

var sticky = header.offsetTop;
    function myFunction() {
       if (window.pageYOffset > sticky) {
        header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

// /* =============== TYPE JS ============== */
let typpe = new Typed('.autotype', {
   strings: ["Blogger", "Developer", "Social Media Marketer", "Freelancer", "IT Support Manager"],
   typeSpeed: 21,
   backSpeed: 15,
   loop: true
});



/* ============ SIDE MENU =========== */

let sidemenu = document.getElementById('sidemenu');

function openmenu(){
	sidemenu.style.right = '0';
}

function closemenu(){
	sidemenu.style.right = '-100%';
}