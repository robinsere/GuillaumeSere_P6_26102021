import HomePage from "./assets/js/homePage.js";
import Photographer from "./assets/js/Photographer.js";


class FishEyeApp {
  constructor() {
      fetch("./assets/js/data/FishEyeData.json").then(response => response.json())
      .then(datas => {
          this.datas = datas;
          this.initApp()
      })
      .catch((error) => console.error("Erreur : " + error));
  }

  // Routage selon la page demandée
  initApp() {
    switch(window.location.pathname) {
      case "/index.html":
        const home = new HomePage(this.datas);
        home.renderHomePage();
      break;
      case "/profil.html":
        const photographer = new Photographer(this.datas);
        photographer.renderPhotographerPage(this.datas);
      break;
    }
  }

}
// Initialise l'application
const app = new FishEyeApp();