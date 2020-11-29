import galaryItems from "./gallery-items.js";

const galaryBox = document.querySelector(".js-gallery");
const modalBox = document.querySelector(".js-lightbox");
const closeBtnRef = document.querySelector("button.lightbox__button");
const modalImageRef = document.querySelector("img.lightbox__image");
const backdropRef = document.querySelector(".lightbox__overlay");

galaryBox.addEventListener("click", onImageClick);
closeBtnRef.addEventListener("click", closeModal);
backdropRef.addEventListener("click", onBackDropClick);

function createNewGalary(massiveImage) {
  const imagesMapJoin = massiveImage
    .map((currentV) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${currentV.original}"><img class="gallery__image" src="${currentV.preview}" data-source="${currentV.original}" alt="${currentV.description}"/></a></li>`;
    })
    .join("");

  galaryBox.insertAdjacentHTML("beforeend", imagesMapJoin);
}

createNewGalary(galaryItems);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  openModal();
  changeSrc();
}

function openModal() {
  window.addEventListener("keydown", onPressEscape);
  modalBox.classList.add("is-open");
}

function changeSrc() {
  const currentActiveSource = event.target.dataset.source;
  modalImageRef.src = currentActiveSource;
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  window.removeEventListener("keydown", onPressEscape);
  modalBox.classList.remove("is-open");
  modalImageRef.src = "";
}

// Второй вариант создания элементов руками

// function createNewGalary(massiveImage) {
//   const imagesMapJoin = massiveImage.map((currentV) => {
//     const upperLi = document.createElement("li");

//     upperLi.classList.add("gallery__item");

//     const imageRef = document.createElement("a");
//     imageRef.classList.add("gallery__link");
//     imageRef.setAttribute("href", `${currentV.original}`);

//     upperLi.appendChild(imageRef);

//     const imageInner = document.createElement("img");
//     imageInner.classList.add("gallery__image");
//     imageInner.setAttribute("src", `${currentV.preview}`);
//     imageInner.setAttribute("data-source", `${currentV.original}`);
//     imageInner.setAttribute("alt", `${currentV.description}`);

//     imageRef.appendChild(imageInner);
//     return upperLi;
//   });

//   galaryBox.append(...imagesMapJoin);
// }

// createNewGalary(galaryItems);

// -----------------------------------------
