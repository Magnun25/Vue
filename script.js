
Vue.component('Semaforo',{
   props:['status'],
   data:function(){
      return {
      }
   },
   template:`
   <div class="fundo-semaforo">
      <template v-if="status == 'red'">
         <Luz :cor="status"></Luz>
         <Luz></Luz>
         <Luz></Luz>
      </template>
      <template v-else-if="status == 'yellow'">
         <Luz></Luz>
         <Luz :cor="status"></Luz>
         <Luz></Luz>
      </template>
      <template v-else-if="status == 'green'">
         <Luz></Luz>
         <Luz></Luz>
         <Luz :cor="status"></Luz>
      </template>
   </div>
   `

})

Vue.component('Luz',{
   props:['cor'],
   template:`
   <div :class="cor" class="bola" ></div>
   `
})


let app = new Vue({
   el:'#app',
   data:{
      sinalStatus:'red'
   },
   methods:{
      liberar:function(){
         this.sinalStatus = 'green'
      },
      fechar:function(){
         this.sinalStatus = 'yellow'
         setTimeout(this.fecharSinal, 1000);
      },
      fecharSinal:function(){
         this.sinalStatus = 'red'
      }
   }
})

