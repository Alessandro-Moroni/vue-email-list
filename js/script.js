const {createApp} = Vue;

createApp({
  data(){
    return{
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    }
  },

  methods:{
   createEmail(){
    for (let i = 0; i < 10; i++) {

      axios.get(this.apiUrl)
      .then((risposta) =>{
        this.emails.push(risposta.data.response) 
        console.log(this.emails);
      })
    }
   }

  },

  mounted(){
    this.createEmail()
  }
}).mount('#app');

