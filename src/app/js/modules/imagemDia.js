export default function fetchImagemDia(url, target) {
  const imagem = document.querySelector(target);
  const imgF0F = '/dist/assets/img/404.jpg';
  const titulo = document.querySelector('[data-imagem="titulo"]');

  if (imagem) {
    fetch(url)
      .then((res) => res.json())
      .then((img) => {
        imagem.src = img.url;
        titulo.innerText = img.title;
      })
      .catch((error) => {
        imagem.src = imgF0F;
        console.log(error);
      });
  }
}
