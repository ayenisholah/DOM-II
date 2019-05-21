const navLinks = document.querySelectorAll('a');

navLinks.forEach(element => {
    element.addEventListener("mouseover", function(event){
        event.target.style.color = "#A0001E"
    });
    setTimeout(function() {
        event.target.style.color = "";
    }, 5);
}, false);