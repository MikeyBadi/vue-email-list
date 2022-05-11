const app = new Vue({
  el: "#app",

  data:{
    emails:[],
    isLoading: true,
    allEmailLoaded: 100
  },
  mounted(){
    this.getEmail()
  },
  methods:{
    getEmail(){
      for(let i = 0; i < this.allEmailLoaded; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
        then(res =>{
          const email = res.data.response;
          console.log(email);
          this.emails.push(email)
          if(this.emails.length === this.allEmailLoaded){
              this.isLoading = false
          }
        })
      }

    }
  }
})