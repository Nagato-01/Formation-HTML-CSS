let bouton = document.getElementById("monBouton");
let paragraphe = document.getElementById("monParagraphe");
let compteurElement = document.getElementById("compteur");
let compteur = 0;
let couleurs = ["#ff9999", "#99ff99", "#9999ff"];

bouton.addEventListener("click", function() {
    compteur++;
    paragraphe.textContent = "Vous avez cliqué !";
    paragraphe.style.backgroundColor = couleurs[compteur % 3];
    compteurElement.textContent = "Nombre de clics : " + compteur;
});