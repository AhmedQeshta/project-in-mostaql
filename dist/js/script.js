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


const days = document.querySelectorAll('.days>li>span.available');
days.forEach(function (element) {
  element.addEventListener('click', function () {
    console.log(element)
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      element.classList.add('available');
    } else {
      days.forEach(function (element) {
        element.classList.remove('active');
        element.classList.add('available');
      });
      element.classList.add('active');
      element.classList.remove('available');

    }

  });
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




