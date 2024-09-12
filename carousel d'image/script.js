let images = document.querySelectorAll("#carousel img");
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active')); 
    images[index].classList.add('active'); 
}

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});