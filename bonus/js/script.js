// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// bonus
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

const app = new Vue(
  {
    el: '#container',
    data: {
      message: 'Ciao!',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/36000/36114.jpg',
      text: '',
      placeHolderMessage: 'Inserisci un messaggio'
    }
  }
);
