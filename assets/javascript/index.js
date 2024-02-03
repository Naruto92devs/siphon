    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarLinks = document.querySelector(".nav");
    
    navbarToggle.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });

    window.onload = function() {
        document.getElementById("myaudio").play();
        }