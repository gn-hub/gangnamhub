$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  // section01
  var section01Scene = new ScrollMagic.Scene({
    triggerElement: '.section01',
    triggerHook: 0
  })
  .setPin('.section01')
  .addIndicators()
  .addTo(controller);

  // section02
  var section02Scene = new ScrollMagic.Scene({
    triggerElement: '.section02',
    triggerHook: 0
  })
  .setPin('.section02')
  .addIndicators()
  .addTo(controller);

  // section03
  var section03Scene = new ScrollMagic.Scene({
    triggerElement: '.section03',
    triggerHook: 0
  })
  .setPin('.section03')
  .addIndicators()
  .addTo(controller);

  // section04
  var section04Scene = new ScrollMagic.Scene({
    triggerElement: '.section04',
    triggerHook: 0,
  })
  .setPin('.section04')
  .addIndicators()
  .addTo(controller);

});
