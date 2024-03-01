$(document).ready(function () {
  createHeader();
  createFooter();
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");

    }
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");

    $('.menu-btn i').toggleClass("active");
  })
})

document.onload = function(){ showSlides(1); };

window.addEventListener('load', function () {

  showSlides(1);
});
function createHeader() {
  let strHTML = "";
  strHTML += '<div class="max-width" style="width: 100%;margin-left: 0;">';
  strHTML += '<div class="menu-btn">';
  strHTML += '<img src="./assets/images/icons/menu.svg" class="icon" style="color:white"/>';
  strHTML += '</div>';
  //strHTML += '<div class="logo text-right"><a href="./index.html">Davide<span> Parizia</span></a></div>';
  strHTML += '<div class="logo text-right" style="width:225px"><a href="./index.html"><img src="./assets/images/LogoFull.svg" class="logo-header"/></a></div>';
  strHTML += "<div class='menu' id='menu-back'>"
  strHTML += '<ul class=" mtb-auto menu-inside">';
  if (window.location.href.includes('index.html'))
    strHTML += '<li class="header-page-tab"><a href="./index.html" class="selected-page"><img class="d-inline d-lg-none icon" src="./assets/images/icons/selected_home_menu.svg"/> Home</a></li>';
  else
    strHTML += '<li class="header-page-tab"><a href="./index.html"><img class="d-inline d-lg-none icon" src="./assets/images/icons/home_menu.svg"/> Home</a></li>';


  if (window.location.href.includes('projects.html'))
    strHTML += '<li class="header-page-tab"><a href="./projects.html" class="selected-page"><img class="d-inline d-lg-none icon" src="./assets/images/icons/selected_projects.svg"/> Projects</a></li>';
  else
    strHTML += '<li class="header-page-tab"><a href="./projects.html"><img class="d-inline d-lg-none icon" src="./assets/images/icons/projects.svg"/> Projects</a></li>';


  if (window.location.href.includes('skills.html'))
    strHTML += '<li class="header-page-tab"><a href="./skills.html" class="selected-page"><img class="d-inline d-lg-none icon" src="./assets/images/icons/selected_skills.svg"/> Skills</a></li>';
  else
    strHTML += '<li class="header-page-tab"><a href="./skills.html"><img class="d-inline d-lg-none icon" src="./assets/images/icons/skills.svg"/> Skills</a></li>';


  if (window.location.href.includes('contacts.html'))
    strHTML += '<li class="header-page-tab"><a href="./contacts.html" class="selected-page"><img class="d-inline d-lg-none icon" src="./assets/images/icons/selected_contact.svg"/> Contacts</a></li>';
  else
    strHTML += '<li class="header-page-tab"><a href="./contacts.html"><img class="d-inline d-lg-none icon" src="./assets/images/icons/contact.svg"/> Contacts</a></li>';

  strHTML += '<li  class="header-page-tab"><!--<div class="btn-resume from-top">--><a href="./assets/resume.pdf" download><img class="icon d-inline d-lg-none" src="./assets/images/icons/download_light.svg"/> Resume <img class="icon d-none d-lg-inline" src="./assets/images/icons/download_light.svg"/></a><!--</div>--></li>';
  strHTML += '</ul>';

  strHTML += '</div>';
  strHTML += '</div>';

  console.log(document.getElementById("navbarHeader"))

  document.getElementById("navbarHeader").innerHTML = strHTML;
}

function createFooter() {

  let strHTML = "";
  strHTML += '<div class="container">';
  strHTML += '<div class="d-none d-lg-block">';

  strHTML += '<table class="table table-sm table-footer">';
  strHTML += '<tbody>';

  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-30" rowspan=4><img class="logo-footer" src="./assets/images/LogoShort.svg"/></td>';
  strHTML += '<td class="w-40 text-center" rowspan=4><div class="w-100 mtb-auto">';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/coding-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/design-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/project-management-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/adobe-photoshop-white.png" />';

  strHTML += '</div></td>';
  strHTML += '<td class="w-30 text-right"><a href="./index.html">Home</a></td>';
  strHTML += '</tr>';

  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./projects.html">Projects</a></td>';
  strHTML += '</tr>';

  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./skills.html">Skills</a></td>';
  strHTML += '</tr>';
  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./contacts.html">Contacts</a></td>';
  strHTML += '</tr>';
  strHTML += '</tbody>';

  strHTML += '</table>';
  strHTML += '</div>';
  strHTML += '<div class="d-block d-lg-none">';

  strHTML += '<table class="table table-sm">';
  strHTML += '<tbody>';


  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-30" rowspan=4><img class="logo-footer" src="./assets/images/LogoShort.svg"/></td>';
  strHTML += '<td class="w-30 text-right"><a href="./index.html">Home</a></td>';
  strHTML += '</tr>';

  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./projects.html">Projects</a></td>';
  strHTML += '</tr>';

  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./skills.html">Skills</a></td>';
  strHTML += '</tr>';
  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="w-50 text-right"><a href="./contacts.html">Contacts</a></td>';
  strHTML += '</tr>';
  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="text-center" colspan="2">';
  strHTML += '<hr>';

  strHTML += '</td>';
  strHTML += '</tr>';
  strHTML += '<tr class="footer-row">';
  strHTML += '<td class="text-center" colspan="2">';

  strHTML += '<img class="footer-icon" src="./assets/images/icons/coding-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/design-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/project-management-white.png" />&nbsp;';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/adobe-photoshop-white.png" />';
  strHTML += '<img class="footer-icon" src="./assets/images/icons/adobe-illustrator-white.png" />';
  strHTML += '</td>';
  strHTML += '</tr>';
  strHTML += '</tbody>';

  strHTML += '</table>';

  strHTML += '</div>';
  strHTML += '</div>';
  document.getElementById("pageFooter").innerHTML = strHTML;
}




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  console.log(n);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides && slides[slideIndex - 1])
    slides[slideIndex - 1].style.display = "block";
  if (dots && dots[slideIndex - 1])
    dots[slideIndex - 1].className += " active";
}