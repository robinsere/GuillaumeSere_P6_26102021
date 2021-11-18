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
 
    const mediaLinks = photographersMediasElement.querySelectorAll(".media__link");
    mediaLinks.forEach(link => {
      link.addEventListener("click", () => {
        // lightbox
        const lightbox = document.getElementById("modal-lightbox");

        // Récupère le média à afficher
        const media = this.photographer.medias.filter(media => media.id == link.dataset.mediaid)[0];
        const imageLightbox = lightbox.querySelector("img");
        imageLightbox.src = "assets/images/photos/" + this.photographerId + "/" + media.image;
        const videoLightbox = lightbox.querySelector('video');
        videoLightbox.src = "assets/images/photos/" + this.photographerId + "/" + media.video;
        console.log(videoLightbox); 
   
        // Affiche le titre
        const titleLightbox = lightbox.querySelector("p");
        titleLightbox.innerHTML = media.title;

        // ouverture de la lightbox
        lightbox.classList.add("open");

        // fermeture de la lightbox
        lightbox.addEventListener("click", () => {
        lightbox.classList.remove("open");
        });

      });
      
    });
     
  }

}