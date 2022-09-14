let app = new Vue({
   el:'#app',
   data: {
      n1: Math.floor(Math.random() * 30),
      n2: Math.floor(Math.random() * 30),
      n3:0,
      acertou: "Você acertou parabéns!!",
      errou: "Você errou, tente novamente!",
      pergunta: "Faça a conta...."
   }
})
