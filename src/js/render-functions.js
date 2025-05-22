
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryLib = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const galleryList = document.querySelector('.gallery');


export default function createGallery(images) {
    

    const markup = images
    console.log(images)
    .map(image => {
       const keysToShow = ['likes', 'views', 'comments', 'downloads'];
       const infoMarkup = keysToShow
        .map(key =>`<p class="info-item">${capitalizeFirstLetter(key)}:<span class="info">${image[key]}</span></p>`)
        .join('');
      return `<li class="image-item">
    <a href="${image.largeImageURL}" title="${image.tags}">
    <img src="${image.webformatURL}" 
    alt="${image.tags}"
    />
    </a>
    <div class="gallery-info">
    ${infoMarkup}
    </div>
    </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  galleryLib.refresh();
}

function capitalizeFirstLetter(string){
    if(!string){
        return string
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function clearGallery() {
}
function showLoader() {
}
function hideLoader() {   
}
function showLoadMoreButton() {
}
function hideLoadMoreButton() {
} 
