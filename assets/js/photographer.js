import vuePhotographerPage from "./components/vuePhotographerPage.js";

export default class Photographer {
  constructor(datas) {

    this.photographerId = new URLSearchParams(window.location.search).get("id");
    this.photographer = datas.photographers.filter(photographer => photographer.id == this.photographerId)[0];
    
    if (this.photographer === undefined) window.location = "index.html";

    this.photographer.medias = datas.media.filter(media => media.photographerId == this.photographerId);
    console.log(this.photographer.medias);
  }

  renderPhotographerPage() {

    // Liste des profils
    const photographersPageElement = document.getElementById("photographer-profil");
    photographersPageElement.innerHTML = vuePhotographerPage.createInfoTemplate(this.photographer);

    // Liste des medias
    const photographersMediasElement = document.getElementById("gallery");
    photographersMediasElement.innerHTML = vuePhotographerPage.createListMediaTemplate(this.photographer);

    // Liste des medias dans la lightbox
    const lightboxMediasElement = document.getElementById("modal-lightbox");
    lightboxMediasElement.innerHTML = vuePhotographerPage.createLightboxTemplate(this.photographer);
    
  }

}