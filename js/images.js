/*
let galImages=document.querySelectorAll("#singleGallery img");

for (let i = 0; i < galImages.length;i++) {
    let image=galImages[i];
    image.addEventListener("click",showSinglePict,false);

}
*/
window.addEventListener("load", () => {
    let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}';
    
}, false);

function showSinglePict(e) {
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    bigImage.alt = image.alt;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener("click", closesingle, false);
}
function closesingle() {
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');

}