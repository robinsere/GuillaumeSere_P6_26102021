// Renvoi la vue des tags

function createListTemplate(tags) {
    let template = "";
    tags.forEach(tag => {
        template +=
            `<li class="tag-item active" data-active="false" data-value="${tag}" role="button" aria-label="filtre ${tag}">
            <a href="#">${tag}</a>
        </li>`;
    });
    return template;
}

/*
function tagsActive() {
    const active = document.getElementsByClassName("tag-list");
	active.classList.add(".active");
}
*/

function getTags(datas) {
    const tags = [];
    datas.photographers.forEach(photographer => {
        tags.push(...photographer.tags);
    });
    return [...new Set(tags)];
}

export default {
    getTags,
    createListTemplate
}