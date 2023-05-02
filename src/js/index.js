const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

const alterarModal = () => {
  modal.classList.toggle("aberto");
};

botaoTrailer.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFechar.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", "");
});
