let navLinks = document.querySelectorAll('a');

navLinks.forEach(element => {
    element.addEventListener("mouseover", function(event){
        event.target.style.color = "#A0001E"
    });
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    funBus.style.transform = `scale(${scale})`;
}
  
let scale = 1;
const funBus = document.querySelector('header img');
funBus.onwheel = zoom;

const adventureImg = document.querySelector('.img-content img');

adventureImg.className = "transition";

adventureImg.addEventListener('transitionstart', function(element){
    element.transform = "rotate"
});

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});