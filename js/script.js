// Ciao ragazzi! ATTENZIONE: la todo list sara' oggetto della lezione di domani, quindi contrariamente a quanto detto in classe, non fatela. Oggi invece dedicatevi a rifare lo slider visto in classe, quindi...
// Nome repo: vue-slider
// Creare con Vue uno slider che permetta di:
// Scorrere le immagini tramite appositi bottoni
// Selezionare una immagine tra quelle disponibili
// Avete liberta' su come realizzare l'interfaccia graficamente, per le funzioni prendete come esempio quanto fatto in classe. Per il momento, usate le immagini in allegato.
// Tips & Tricks:
// In Vue le variabili che contengono lo stato dell'applicazione devono essere inizializzate in un oggetto e assegnato al campo  data durante l'inizializzazione dell'istanza di Vue che controlla la vostra app
// Lo stato di una applicazione e' il luogo concettuale dove vengono salvati i dati utili all'applicazione per "funzionare"
// In Vue le funzioni che cambiano lo stato dell'applicazione devono essere definite in un oggetto e assegnato al campo  methods durante l'inizializzazione dell'istanza di Vue che controlla la vostra app
// La generazione di elementi dinamica, dipendente dallo stato dell'applicazione (inizializzato in data), viene dichiarata lato HTML con le direttive introdotte da Vue (ad es. v-if e v-for)
// Gli eventi associati agli elementi dell'interfaccia vengono catturati lato HTML con le direttive che iniziano con v-on:{nome-evento} o @{nome-evento} e associati ad una delle funzioni (dichiarate in methods) definita durante l'inizializzazione di Vue
// Gli attributi degli elementi che devono cambiare in accordo con lo stato dell'applicazione (inizializzato in data) devono essere dichiarati lato HTML con la direttiva v-bind:{nome-attributo} o :{nome-attributo}
let img = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg']
const sliderImg = new Vue ({
  el: '#slider',
  data:{
    image:[...img],
    i: 0,
  },
  methods: {
    leftChev: function(){
      if(this.i == 0){
        this.i = this.image.length - 1
      } else {
        this.i--
      }
    },
    rightChev: function(){
      if(this.i === this.image.length - 1){
        this.i = 0
      } else {
        this.i++
      }
    }

  }

})

document.addEventListener('keyup' , function (e){
  if(e.key == 'ArrowRight'){
    sliderImg.rightChev()
  }else if(e.key == 'ArrowLeft'){
    sliderImg.leftChev()
  }
})
