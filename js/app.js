window.addEventListener("scroll", function () {
    let header = document.querySelector("nav"); // Sélectionne le header (ou la navbar)
    
    if (window.scrollY > 0) {
        header.classList.add("header_scroll"); // Ajoute la classe si on a scrollé
    } else {
        header.classList.remove("header_scroll"); // Retire la classe si on est en haut
    }
});