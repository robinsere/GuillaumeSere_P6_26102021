 /* ont récupère le fichier JSON avec la méthode fetch */ 
 
let photographer = [];
let medias = [];

  fetch('data/FishEyeData.json')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        photographer = data.photographers
        medias = data.media
        console.log(photographer);
        console.log(medias);
    })
    .catch(function (error){
        console.log(error)
    });

    


  

