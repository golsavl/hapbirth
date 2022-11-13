let button_el = document.getElementById("button");
let main_el = document.getElementById("main");
var happybirthday = new Audio("audio.mp3");

button_el.addEventListener("click", function() {
  main_el.innerHTML = '<p class="wait" id="wait">Please wait ...</p>';
  setTimeout(delay1, 3000);
});

function delay1() {
  main_el.innerHTML = '<p class="wait" id="wait">Please wait more .....</p>';
  setTimeout(delay2, 3000);
}

function delay2() {
  main_el.innerHTML = '<p class="wait" id="wait">Please wait more than more ....... :)</p>';
  setTimeout(delay3, 3000);
}

function delay3() {
  main_el.innerHTML = '<p class="wait" id="wait">Are you ready?!?</p>';
  setTimeout(delay4, 3000);
}

function delay4() {
  main_el.innerHTML = '<p class="wait" id="wait">Are you ready?!?</p><video width="320" height="240" autoplay><source src="video.mp4" type="video/mp4"></video>';
  setTimeout(delay5, 5000);
}

function delay5() {
  main_el.innerHTML = '';
  happybirthday.play();
  setTimeout(delay6, 3000);
}

function delay6() {
  main_el.innerHTML = '<img src="pic1.jpg" class="pic">';
  setTimeout(delay7, 5000);
}

function delay7() {
  main_el.innerHTML = '<img src="pic2.jpg" class="pic">';
  setTimeout(delay8, 5000);
}

function delay8() {
  main_el.innerHTML = '<img src="pic3.jpg" class="pic">';
  setTimeout(delay9, 5000);
}

function delay9() {
  main_el.innerHTML = '<img src="pic4.jpg" class="pic">';
  setTimeout(delay10, 5000);
}

function delay10() {
  main_el.innerHTML = '<img src="pic5.jpg" class="pic">';
  setTimeout(delay11, 5000);
}

function delay11() {
  main_el.innerHTML = '<img src="pic6.jpg" class="picc">';
}
