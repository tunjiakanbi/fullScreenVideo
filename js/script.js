let video = document.getElementById('myVid');
// console.log(video);
let btn = document.getElementById('myBtn');
// console.log(btn);

function myFunction() {
    if(video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    }
    else {
        video.pause();
        btn.innerHTML = "Play";
    }
}