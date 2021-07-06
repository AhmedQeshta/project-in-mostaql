const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) { // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });

  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }
});





//  jquery code

$(document).ready(function () {
  $(window).on('load', function () {
    setTimeout(function () {
      $('#loadingScrean').addClass('displayNone');
      $('#loadingScrean').removeClass('display');
    }, 500); // 0.5 sec
  })
})


$(document).ready(function () {
  $(".bodyInfoCard__header").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 950,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});


