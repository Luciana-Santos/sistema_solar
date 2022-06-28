export default function fetchImagemDia(url, target) {
  const imagem = document.querySelector(target);
  const imgF0F = '/dist/assets/img/404.jpg';
  if (imagem) {
    fetch(url)
      .then((res) => res.json())
      .then((img) => {
        imagem.src = img.url;
      })
      .catch((error) => {
        imagem.src = imgF0F;
        console.log(error);
      });
  }
}
