export default function initImagemDia() {
  const imagem = document.querySelector('[data-imagem="img"]');
  const imgF0F = '/dist/assets/img/404.jpg';
  if (imagem) {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=uzJcucGC2ANpgzcKtUPE7eRXBvbxUPan52hQm7sx',
    )
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
