import vueTag from "./components/vueTag.js";
import vuePhotographersList from "./components/vuePhotographersList.js";

export default class HomePage {
  constructor(datas) {
    this.datas = datas;
  }
  renderHomePage() {
      // Création NavBar tags
      const tags = vueTag.getTags(this.datas),
        navTagsElement = document.getElementById("tags");

      navTagsElement.innerHTML = vueTag.createListTemplate(tags);

      // Liste des profils
      const photographersListElement = document.getElementById("photographers-list");
      photographersListElement.innerHTML = vuePhotographersList.createListTemplate(this.datas.photographers);

      // Evenement selection Tag
      navTagsElement.querySelectorAll("li").forEach((tag) => {
        tag.addEventListener("click", () => {
     // Filtre les photographes qui contiennent le tag selectionné
      const photographersSel = this.datas.photographers.filter(
        (photographer) => photographer.tags.indexOf(tag.dataset.value) !== -1);
        if (tag.classList.toggle('active')){
    // Liste des profils filtrés
        photographersListElement.innerHTML = vuePhotographersList.createListTemplate(photographersSel);
        }
     // Reset la liste des tags   
        const tagsReset = document.getElementById("tag-item");
        tagsReset.addEventListener("click", () =>{
          photographersListElement.innerHTML = vuePhotographersList.createListTemplate(this.datas.photographers);
          tag.classList.remove('active');
        })

        });
      });
  }
}  
