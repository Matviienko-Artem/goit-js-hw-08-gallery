import galaryItems from "./gallery-items.js";

const galaryBox = document.querySelector(".js-gallery");

const imagesMapJoin = galaryItems
  .map((curV) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${curV.original}"><img class="gallery__image" src="${curV.preview}" data-source="${curV.original}" alt="${curV.description}"/></a></li>`;
  })
  .join("");

galaryBox.insertAdjacentHTML("beforeend", imagesMapJoin);

console.log(galaryBox);
