function createLikeTemplate(mediaLikes, photographer) {
    let template = "";
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

function getLike(datas) {
    const mediaLikes = [];
    datas.photographers.forEach(photographer => {
        mediaLikes.push(...photographer.mediaLikes);
    });
    return [...new Set(mediaLikes)];
}


export default {
   createLikeTemplate,
   getLike
}

