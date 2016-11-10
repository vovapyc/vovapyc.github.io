$(document).ready(function() {
    $('#pagepiling').pagepiling({
      afterRender: function(){
      //playing the video
      $('video').get(0).play();
      $('video').get(1).play();
      $('video').get(2).play();
    }
});
});
