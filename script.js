function filterImages(category) {
    const images = document.querySelectorAll(".card");

    images.forEach(img => {
        img.style.display = 
            (category === "all" || img.classList.contains(category))
            ? "block"
            : "none";
    });
}
