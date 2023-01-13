import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const paletteGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', paletteGallery);

gallery.addEventListener('click', openImage);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

function openImage(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
