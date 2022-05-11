const app = new Vue({
  el: "#app",

  data:{
    emails:[],
    isLoading: true
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
        })
      }
      setTimeout(()=>{
        this.isLoading = false
      }, 1000)
    }
  }
})








// getEmail(){
//   for(let i = 0; i < 10 ; i++){
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
//     then(res =>{
//       console.log(res.data.response);
//       const email = res.data.response;
//       this.emails.push(email)
//     })
//   }
//   setTimeout(()=>{
//     this.isLoading = false
//   },1000)
// }