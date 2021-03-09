/* FiveM LoadingScreen By R3IC0P */

window.onload = function () {
   document.body.addEventListener("mousemove", function (event) {
      let cursor = document.getElementById("cursor");

      let x = event.pageX - cursor.width + 23;
      let y = event.pageY - 1;

      cursor.style.left = x;
      cursor.style.top = y;
   });
}

let audio = document.getElementById('music1');
let prev_btn = document.querySelector('.prev-btn');
let next_btn = document.querySelector('.next-btn');

let currTrack = null;

let songs = {
   first: document.getElementById('music1'),
   second: document.getElementById('music2'),
   third: document.getElementById('music3')
};

let volume = document.querySelector('#volume-control');
volume.addEventListener('change', function(e) {
   songs.first.volume = e.currentTarget.value / 100;
   songs.second.volume = e.currentTarget.value / 100;
   songs.third.volume = e.currentTarget.value / 100;
})

function playMusic() {
   if (audio.paused) {
      audio.volume = 0.3;
      audio.play();
      currTrack++;
      console.log(currTrack);
   }
}

playMusic();

function puaseSongs() {
   songs.first.pause();
   songs.second.pause();
   songs.third.pause();
}

function next() {
   puaseSongs();
   if (currTrack == 1) {
      songs.second.play();
      currTrack++;
      console.log(currTrack);
   } else if (currTrack == 2) {
      songs.third.play();
      currTrack++;
      console.log(currTrack);
   }  else {}
}

function prev() {
   puaseSongs();
   if (currTrack == 3) {
      songs.second.play();
      currTrack--;
      console.log(currTrack);
   } else if (currTrack == 2) {
      songs.first.play();
      currTrack--;
      console.log(currTrack);
   } else {}
}