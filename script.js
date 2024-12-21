
const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s",
    "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg"
];
function myFunction() {
    const input = document.getElementById("photo-count");
    const container = document.getElementById("myDIV");
    container.innerHTML = "";
    const count = parseInt(input.value);
    if (isNaN(count) || count < 1 || count > images.length) {
        alert(`Please enter a valid number between 1 and ${images.length}`);
        return;
    }
    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.className = "banner-img";
        container.appendChild(img);
    }
}



