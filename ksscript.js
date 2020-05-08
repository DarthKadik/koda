var myVideo = document.getElementById('marvel');

VisSense.VisMon.Builder(VisSense(myVideo, {
    fullyvisible: 0.75
}))
.on('fullyvisible', function() {
    myVideo.play();
})
.on('hidden', function() {
    myVideo.pause();
})
.build()
.start();

