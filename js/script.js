const app = new Vue({
  el: "#app",

  data:{
    emails:[],
    isLoading: true,
    allEmailLoaded: false
  },
  mounted(){
    this.getEmail()
  },
  methods:{
    getEmail(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
        then(res =>{
          const email = res.data.response;
          this.emails.push(email)
          this.allEmailLoaded = true
          if(this.allEmailLoaded = true){
            setTimeout(()=>{
              this.isLoading = false
            }, 1000)
          }
        })
      }

    }
  }
})