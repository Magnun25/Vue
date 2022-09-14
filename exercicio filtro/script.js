let app = new Vue({
	el:'#app',
	data:{
		nomes:[
			'Rodrigo',
			'Cristiane',
			'Nicolas',
			'Carlos',
			'Célia'
		],
		busca:'',
	},
	computed:{
		nomesFiltrados:function(){
			return this.nomes.filter(function(nome){
				if(this.busca != ''){
					if(nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1){
						return true;
					}
				} else {
					return true;
				}
			}, this);
		}
	}
});