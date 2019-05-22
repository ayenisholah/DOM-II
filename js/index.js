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

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', function(event){
  event.target.style.transform = "rotate(180deg)"
})