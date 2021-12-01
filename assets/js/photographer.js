import vuePhotographerPage from "./components/vuePhotographerPage.js";
import contactForm from "./components/contactForm.js";
import likes from "./components/likes.js";

export default class Photographer {
  constructor(datas) {

    this.photographerId = new URLSearchParams(window.location.search).get("id");
    this.photographer = datas.photographers.filter(photographer => photographer.id == this.photographerId)[0];
    
    if (this.photographer === undefined) window.location = "index.html";

    this.photographer.medias = datas.media.filter(media => media.photographerId == this.photographerId);
    console.log(this.photographer);
  }

  renderPhotographerPage() {

    // Liste des profils
    const photographersPageElement = document.getElementById("photographer-profil");
    photographersPageElement.innerHTML = vuePhotographerPage.createInfoTemplate(this.photographer);

    // Liste des medias
    const photographersMediasElement = document.getElementById("gallery");
    photographersMediasElement.innerHTML = vuePhotographerPage.createListMediaTemplate(this.photographer);

    // Liste des likes 
    const photographerLike = document.getElementById("counter-likes");
    const compteur = this.photographer.medias[0].likes;
 
    const mediaLinks = photographersMediasElement.querySelectorAll(".media__link");
    mediaLinks.forEach(link => {
      link.addEventListener("click", () => {
        // lightbox
        const lightbox = document.getElementById("modal-lightbox");

        // Récupère le média à afficher
        const media = this.photographer.medias.filter(media => media.id == link.dataset.mediaid)[0];
        const mediaContainer = lightbox.getElementsByClassName("lightbox__container");
        mediaContainer[0].innerHTML = vuePhotographerPage.createMediaLightboxTemplate(media, this.photographer);

        // ouverture de la lightbox
        lightbox.classList.add("open");

        // fermeture de la lightbox
        lightbox.querySelector(".close").addEventListener("click", () => {
        lightbox.classList.remove("open");
        });

         //  pagination de la lightbox
         const nextMedia = (media + 1 >= link.dataset.index)[0] ? 0 : media + 1;
        document.querySelector(".arrow-left").addEventListener('click', (e) => {
            (media + 1 >= e.length) ? 0 : media + 1
           console.log(this.photographer.medias)
        });
        document.querySelector(".arrow-right").addEventListener('click', (e) => {
            (media - 1 === -1) ? e.length - 1 : media - 1
            console.log(e)
        });

      });
      
    });

   // gestion des filtres de trie par catégorie
   const filter = document.getElementById("filter-btn");
   const filterList = document.getElementById('filter-list');
  
   // Ouverture du bouton de trie
   filter.addEventListener("click", () => {
        filterList.style.display = "block";
   });
    
   // Fermeture du bouton de trie
   filterList.addEventListener("click", () => {
        filterList.style.display = "none";
    });

    // Initialisation de la modal de contact
    contactForm.modal.init();
    document.getElementById("contact-form").addEventListener("submit", contactForm.form_inscription.onSubmit);
  }

}