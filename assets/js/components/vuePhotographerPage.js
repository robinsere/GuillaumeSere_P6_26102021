import vueTag from './vueTag.js'

// Renvoi le template de la page profil
function createInfoTemplate() {
    let template = "";
    (photographer => {
        template +=
            ` <div class="photographer__infos">
            <h1 class="photographer__infos__name">${photographer.name}</h1>
            <p class="photographer__infos__city">${photographer.city}, ${photographer.country}</p>
            <p class="photographer__infos__tagline">${photographer.tagline}</p>
            <ul class="tag-list" aria-label="tags">
             ${vueTag.createListTemplate(photographer.tags)}
            </ul>
        </div>
        <button id="contact-btn" class="btn photographer__btn">Contactez-moi</button>
        <img class="photographer__img" src="assets/images/photos/Photographers ID Photos/${photographer.portrait}" alt="${photographer.alt}">`;
    });
    return template;
}

function createListMediaTemplate() {

}

export default {
    createInfoTemplate,
    createListMediaTemplate
}