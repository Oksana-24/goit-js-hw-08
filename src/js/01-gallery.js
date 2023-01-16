// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.dir(gallery)


const markup = galleryItems.reduce((acc, { preview, original, description }) =>
    acc + `
        <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a>`, '');

gallery.insertAdjacentHTML('beforeend', markup);


console.dir(SimpleLightbox)

new SimpleLightbox('.gallery a', { 
        enableKeyboard: true,
        showCounter: false,
        captionsData: 'alt',
        captionDelay: 250
    });