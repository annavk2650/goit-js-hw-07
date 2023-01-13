// import * as basicLightbox from 'basiclightbox';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const paletteGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', paletteGallery);

gallery.addEventListener('click', openImage);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
         </a>
    </div>
`;
    })
    .join('');
}

function openImage(event) {
  event.preventDefault();
  if (event.target === event.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);
  instance.show();

  gallery.addEventListener('keydown', onEscPress => {
    if (onEscPress.code === 'Escape') {
      instance.close();
    }
  });
}
