import {galleryEl} from './js/main-page-generation';

const linkEls = document.querySelectorAll('a');
linkEls.forEach(function (linkEl) {
  linkEl.onclick = function(event) {
    event.preventDefault();
  }
});

const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImgEl = document.querySelector('.lightbox__image');

galleryEl.addEventListener('click', openModal);
function openModal (evt) {
  lightboxEl.classList.add('is-open');
  lightboxImgEl.src = evt.target.dataset.source;
}

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', closeModal);
function closeModal () {
  lightboxEl.classList.remove('is-open');
  lightboxImgEl.src = '';
}