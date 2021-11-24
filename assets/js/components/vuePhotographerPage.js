import vueTag from './vueTag.js'

// Renvoi le template de la page profil
function createInfoTemplate(photographer) {
    let template = "";
        template +=
            `<div class="photographer__infos">
            <h1 class="photographer__infos__name">${photographer.name}</h1>
            <p class="photographer__infos__city">${photographer.city}, ${photographer.country}</p>
            <p class="photographer__infos__tagline">${photographer.tagline}</p>
            <ul class="tag-list" aria-label="tags">
             ${vueTag.createListTemplate(photographer.tags)}
            </ul>
        </div>
       
        <img class="photographer__img" src="assets/images/photos/Photographers ID Photos/${photographer.portrait}" alt="${photographer.alt}">
        `;

        return template;
    };
   
// Renvoi la liste des médias selon le profil
function createListMediaTemplate(photographer) {
    let template = "";
    photographer.medias.forEach(media => {
        template += `<article class="media"><a href="#" role="button" class="media__link" data-mediaid="${media.id}" aria-label="${media.title}">`;
        if (media.video !== undefined) {
            template += `
            <video class="media__link__video" aria-label="${media.title}">
                 <source src="assets/images/photos/${photographer.id}/${media.video}" type="video/mp4">
            </video> `;
        } else {
            template += `<img class="media__link__img" src="assets/images/photos/${photographer.id}/${media.image}" alt="${media.alt}">`;
        }
        template += `</a>
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

//Renvoi une vidéo ou une image dans le template
function createMediaLightboxTemplate(media, photographer) {
    let template = "";
    if (media.video !== undefined) {
        template += `
                <div class="media-container">
                 <video id="video-media" class="media" controls="true"><source src="assets/images/photos/${photographer.id}/${media.video}" type="video/mp4"></video>
                </div>
                <button class="arrow-left" aria-label="précédent">
                    <i role="button" class="fas fa-chevron-left"></i>
                </button>
                <button class="arrow-right" aria-label="suivant">
                    <i role="button" class="fas fa-chevron-right"></i>
                </button>
                <button class="close" aria-label="fermer la vue rapproché">
                    <i class="fas fa-times"></i>
                </button>
            `;
    } else {
        template += `
                <div class="media-container">
                <img id="image-media" class="media" src="assets/images/photos/${photographer.id}/${media.image}" alt="${media.alt}">
            </div>
            <button class="arrow-left" aria-label="précédent">
                <i role="button" class="fas fa-chevron-left"></i>
            </button>
            <button class="arrow-right" aria-label="suivant">
                <i role="button" class="fas fa-chevron-right"></i>
            </button>
            <button class="close" aria-label="fermer la vue rapproché">
                <i class="fas fa-times"></i>
            </button>
            `;
    }
    template += `<p class="title">${media.title}</p>`;
    return template;
}


export default {
    createInfoTemplate,
    createListMediaTemplate,
    createMediaLightboxTemplate,
}

