// 1. How to click on the icon then automatically scroll down the page to the section I am looking for.


const navLinks = document.querySelectorAll('nav a'),
sliderRects = document.querySelectorAll('.rect');

function scrollSection(section) {

window.scroll({
top: document.getElementById(section).offsetTop,
behavior: 'smooth' 
});
}

function animateStuff() {
sliderRects.forEach(function(sliderRect) {
const slideInAt = (window.scrollY + window.innerHeight) - sliderRect.offsetHeight / 2;
const imageBottom = sliderRect.offsetTop + sliderRect.offsetHeight;
const isHalfShown = slideInAt > sliderRect.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;
if (isHalfShown && isNotScrolledPast) {
sliderRect.classList.add('active');
} else {
sliderRect.classList.remove('active');
}
});
}

navLinks.forEach(function(element) {
element.addEventListener('click', function(e) {
e.preventDefault();

let target = this.dataset.link;

scrollSection(target);
});
});

window.addEventListener('scroll', function() {
animateStuff();
});
function startabout() {
scrollSection(navLinks[1].dataset.link)
}
function startct() {
  scrollSection(navLinks[3].dataset.link)
  }

function startpfo() {
  scrollSection(navLinks[2].dataset.link)
  }
function home() {
  scrollSection(navLinks[0].dataset.link)
  }
// 2. Click on icon to switch on/ off the audio
const soundLink = document.querySelector('.icons .sound'),
    soundFile = document.getElementById('sound-file');
let isPlaying = false;

function togglePlay() {
  isPlaying ? soundFile.pause() : soundFile.play();
}

soundFile.onplaying = function() {
  isPlaying = true;
}

soundFile.onpause = function() {
  isPlaying = false;
}

soundLink.addEventListener('click', function(){
   togglePlay();
});

// 3. Click on the icon to change the entire background color and text color( kind of like switching between night mode and day mode): 
//is it better to just switch to another index page or change everything in the same index instead? LG: Best to update backgroundColor

//LG: See if you can figure this one out based on examples above
//Define constant variable styleLink and store .icon .style -- see Line 12

//Add Event Listener for styleLink to trigger on click -- see Line 28

//In style.css create a new class body.active and store the new background color
//Inside event listener add a function (Line 38) -- document.getElementByTagName('body').classList.toggle('active')
const styleLink = document.querySelector('.style'),
  bg = document.querySelector('.bg');

styleLink.addEventListener('click', function() {
  bg.classList.toggle('night');
});