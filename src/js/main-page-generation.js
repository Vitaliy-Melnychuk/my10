import {galleryItems} from './app.js';

export const galleryEl = document.querySelector('.js-gallery');
galleryEl.innerHTML = galleryItems.map( galleryItem => {
  return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${galleryItem.original}"
      >
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `;
}).join('');