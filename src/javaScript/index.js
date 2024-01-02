function retrieveBodyAndCreateComponents() {
  const retrieveBody = document.querySelector("body");

  const main = window.document.createElement("main");
  const title = window.document.createElement("h1");
  const container = window.document.createElement("div");
  const buttonYes = window.document.createElement("button");
  const buttonNo = window.document.createElement("button");

  title.innerText = "Lolzin hoje?";
  buttonYes.innerText = "Sim";
  buttonNo.innerText = "Não";

  buttonNo.classList.add("button-no");
  buttonYes.classList.add("button-yes");

  retrieveBody.appendChild(main);
  main.append(title, container);
  container.append(buttonYes, buttonNo);

  return retrieveBody;
}

function eventButtonMath() {
  const buttonNo = document.querySelector(".button-no");

  const width = window.innerWidth - 50;
  const height = window.innerHeight - 50;

  buttonNo.addEventListener("mouseover", () => {
    buttonNo.style.position = "absolute";
    buttonNo.style.top = Math.random() * height + "px";
    buttonNo.style.left = Math.random() * width + "px";
  });

  return buttonNo;
}

function createModal() {
  const dialog = window.document.querySelector("dialog");
  const div = window.document.createElement("div");
  const header = window.document.createElement("header");
  const title = window.document.createElement("h2");
  const section = window.document.createElement("section");
  const buttonClose = window.document.createElement("button");
  const video = window.document.createElement("video");
  video.classList.add("cat-video");
  video.src = "./src/video/Chipi_chipi_chapa_chapa_cat.mp4";
  video.autoplay = false;

  buttonClose.innerText = "Fechar";
  title.innerText = "Duo bot confirmado!";

  buttonClose.classList.add("button-close");
  dialog.classList.add("container__modal");

  dialog.appendChild(div);

  div.append(header, section);
  header.appendChild(title);
  section.append(video, buttonClose);

  dialog.style.display = "none";
}

function openModal() {
  const button = document.querySelector(".button-yes");
  const modal = document.querySelector(".container__modal");
  const video = document.querySelector(".cat-video");

  button.addEventListener("click", () => {
    modal.style.display = "flex";
    video.play();
  });
}

function closeModal() {
  const button = document.querySelector(".button-close");
  const modal = document.querySelector(".container__modal");
  const video = document.querySelector(".cat-video");

  button.addEventListener("click", () => {
    modal.style.display = "none";
    video.pause();
  });
}

retrieveBodyAndCreateComponents();
eventButtonMath();
createModal();
openModal();
closeModal();
