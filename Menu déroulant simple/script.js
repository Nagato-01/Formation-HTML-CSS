// Sélectionner les éléments
let dropBtn = document.getElementById("dropBtn");
let dropContent = document.getElementById("dropContent");

// Ajouter un événement de clic pour afficher/masquer le sous-menu
dropBtn.addEventListener("click", function() {
    if (dropContent.style.display === "block") {
        dropContent.style.display = "none";
    } else {
        dropContent.style.display = "block";
    }
});