import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);


const paletteContainer = document.querySelector('.gallery');
const cardMarkup = createGalleryItemsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('afterbegin', cardMarkup);

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"    />
            </a>
        </div>`;
    }).join('');    
    
};

paletteContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {   

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${evt.target.dataset.source}" alt="${evt.target.alt}"  
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close
    }
})
instance.show()
}

