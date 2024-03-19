const {createApp} = Vue;

createApp({
  data(){
    return{
      email: '',
    }
  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((risposta) =>{
      console.log(risposta.data.response);
    })
  }
}).mount('#app');