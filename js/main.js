$(document).ready(function() {
    $('#pagepiling').pagepiling({
      afterRender: function(){
      //playing the video
      $('video').get(0).play();
    }
  });
  });

  var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

if (isIOS) {

    var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas',
        timelineSelector: false,
        autoplay: true,
        makeLoop: true,
        pauseOnClick: false,
        audio: false
    });

}
