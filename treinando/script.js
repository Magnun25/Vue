let app = new Vue({
	el:'#app',
	data:{
		newColor:''
	},
	methods:{
		changeColor:function(e){
			this.newColor = e.target.innerText.toLowerCase()
		}
	}
});