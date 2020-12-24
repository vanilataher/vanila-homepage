let scrollContact = $('.aContact');

scrollContact.on('click', function () {
  $('#contact').velocity('scroll', {
    duration: 1000,
    easing: 'easeInOutQuint',
  });
});
