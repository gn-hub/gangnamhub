$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  // header show
  var headerShowScene = new ScrollMagic.Scene({
    triggerElement: '.pages_imgBox',
    triggerHook: 0
  })
  .setClassToggle('.contactHeader', 'show')
  .addTo(controller);

  // waterMark show
  var waterMarkScene = new ScrollMagic.Scene({
    triggerElement: '.pages_imgBox',
    triggerHook: 0
  })
  .setClassToggle('.contactWaterMark', 'show')
  .addTo(controller);

  // kakaoTalk show
  var talkScene = new ScrollMagic.Scene({
    triggerElement: '.pages_imgBox',
    triggerHook: 0
  })
  .setClassToggle('.contactTalk', 'show')
  .addTo(controller);

  // call show
  var callScene = new ScrollMagic.Scene({
    triggerElement: '.pages_imgBox',
    triggerHook: 0
  })
  .setClassToggle('.contactCall', 'show')
  .addTo(controller);


});
