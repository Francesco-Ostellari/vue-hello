// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
  {
    el: '#container',
    data: {
      message: 'Ciao!',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/36000/36114.jpg'
    }
  }
);
