function bandeira(pais) {
   return '<img src="bandeiras/'+pais+'.png" />'
}

Vue.component("pais",{
   props:['bandeira','continente'],
   template: `<p v-html="bandeira + continente"></p>`
})

let app = new Vue({
   el:'#app',
   data:{
      argentina:bandeira('argentina'),
      brazil:bandeira('brazil'),
      china:bandeira('china'),
      uk:bandeira('uk'),
      usa:bandeira('usa')
   }
})