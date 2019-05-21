const navLinks = document.querySelectorAll('a');

navLinks.forEach(element => {
    element.addEventListener("mouseover", function(event){
        event.target.style.color = "#A0001E"
    });
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

