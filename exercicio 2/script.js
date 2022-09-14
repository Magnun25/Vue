let app = new Vue({
	el:'#app',
	data:{
		nomeInput:"",
		aviso:"",
		check: false,
		timer:null,
		lista:[]
	},
	watch:{
		nomeInput:function(){
			if(this.timer != null){
				clearTimeout(this.timer)
			}
			if(this.nomeInput != ""){
				this.aviso = "Digitando...";
				this.check = false;
				this.timer = setTimeout(this.ficarPronto, 1000)
			}
		}
	},
	methods:{
		ficarPronto:function(){
			this.aviso = ""
			if(this.nomeInput.length > 2){
				this.check = true;
			}
		},
		add:function(){
			this.lista.push(this.nomeInput);
			this.nomeInput = "";
			this.check = false;
		}
	},
	computed:{
		totalNomes:function(){
			return "Total de nomes: "+ this.lista.length
		}
	}
	
});