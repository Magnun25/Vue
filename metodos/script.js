let app = new Vue({
   el:'#app',
   data:{
      nome: "Rodrigo",
      idade: 32
   },
   methods:{
      mostrar: (nome, idade) => {
         let txt = 'Olá, '+nome+' - '+idade+' anos';
         return txt
      },
      testando: () => 'testando 1, 2, 3...'
   }
})