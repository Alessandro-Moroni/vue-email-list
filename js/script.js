const {createApp} = Vue;

createApp({
  data(){
    return{
      email: '',
      min: '10',
      max: '100',
      items: '10',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    }
  },

  mounted(){
    this.email = 'Loading'
    axios.get(this.apiUrl + `?min=${this.min}&max=${this.max}&items=${this.items}`)
    .then((risposta) =>{
      console.log(risposta.data);
      this.email = risposta.data.response
      console.log(this.email);
    })

    .catch((errore) =>{
      console.log(errore);
    })
  }
}).mount('#app');