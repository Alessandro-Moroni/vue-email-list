const {createApp} = Vue;

createApp({
  data(){
    return{
      email: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    }
  },

  mounted(){
    for (let i = 0; i < 10; i++) {

      axios.get(this.apiUrl)
      .then((risposta) =>{
        this.email = risposta.data.response
        console.log(this.email);
        this.email.push
      })
    }

   
  }
}).mount('#app');

