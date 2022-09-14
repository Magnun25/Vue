let app = new Vue({
	el:'#app',
	data:{
		names:[],
		nameInput: null
	},
	methods: {
		onSubmit: function(){
			this.names.push(this.nameInput)
			this.nameInput = null
		}
	}
});