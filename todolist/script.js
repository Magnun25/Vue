Vue.component('new-item', {
	data:function(){
		return {
			txt:''
		}
	},
	methods:{
		add:function(){
			this.$emit('add', this.txt)
			this.txt = ''
		}
	},
	template:`
		<div>	
			<input type="text" v-model="txt"/>
			<button @click="add">Adicionar</button>
		</div>
	`
})

let lista = {
	props:['itens'],
	template: `
		<div>
			<ul>
				<li v-for="item in itens">{{item}}</li>
			</ul>
		</div>
	`
}



let header = new Vue({
	el:'#header',
	data:{

	},
	methods:{
		addNew:function(txt){
			sidebar.addTodoList(txt)
		}
	}
})

let sidebar = new Vue({
	el:'#sidebar',
	data:{
		itens:['item 1', 'item 2']
	},
	methods:{
		addTodoList:function(txt){
			this.itens.push(txt)
		}
	},
	components:{
		lista
	}
})

