import vueTag from './vueTag.js'

// Renvoi le template de la page profil
function createInfoTemplate(photographer) {
    let template = "";
        template +=
            ` <div class="photographer__infos">
            <h1 class="photographer__infos__name">${photographer.name}</h1>
            <p class="photographer__infos__city">${photographer.city}, ${photographer.country}</p>
            <p class="photographer__infos__tagline">${photographer.tagline}</p>
            <ul class="tag-list" aria-label="tags">
             ${vueTag.createListTemplate(photographer.tags)}
            </ul>
        </div>
        <button id="contact-btn" class="btn photographer__btn" onclick="displayModal()">Contactez-moi</button>
        <img class="photographer__img" src="assets/images/photos/Photographers ID Photos/${photographer.portrait}" alt="${photographer.alt}">
        `;

        return template;
    };
   
// Renvoi la liste des médias selon le profil
function createListMediaTemplate(photographer) {
    let template = "";
    photographer.medias.forEach(media => {
        template +=
        `<article class="media">
        <a href="#" role="button" class="media__link" data-mediaid="${media.id}" >
            <img class="media__link__img" src="assets/images/photos/${photographer.id}/${media.image}"
            alt="${media.alt}"> 
        </a>
        <footer class="media__infos">
            <p class="media__infos__title">${media.title}</p>
            <div class="media__infos__likes">
                <span class="media__infos__like-nb">${media.likes}</span>
                <i class="far fa-heart media__infos__likes_-icon" aria-label="likes" role="button"
                    tabindex="0"></i>
            </div>
        </footer>
    </article>`;
    });
   
return template;
};

/*
function createLightboxTemplate(photographer) {
    let template = "";
    photographer.medias.forEach(media => {
        template +=
        `   <div class="lightbox__container">
        <p class="title">${media.title}</p>
        <button class="arrow-left" aria-label="précédent">
            <i role="button" class="fas fa-chevron-left"></i>
        </button>
        <button class="arrow-right" aria-label="suivant">
            <i role="button" class="fas fa-chevron-right"></i>
        </button>
        <button class="close" aria-label="fermer la vue rapproché" onclick="closeMedia()">
            <i class="fas fa-times"></i>
        </button>
    </div> `
    });
  
    return template;
}
*/

export default {
    createInfoTemplate,
    createListMediaTemplate,
}

