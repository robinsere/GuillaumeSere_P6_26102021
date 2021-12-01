function createLikeTemplate(mediaLikes) {
    let template = [];
    mediaLikes.forEach(like => {
        template +=
            ` <aside id="card-infos" class="card-infos">
            <div class="cards-infos__nb-likes">
                <span id="counter-likes" class="nb-likes">${photographer},${like}</span>
                <i class="fas fa-heart" aria-label="likes"></i>
            </div>
            <p>${photographer.price} € / jour</p>
        </aside>`;
    });
    return template;
}


export default {
   createLikeTemplate
}

