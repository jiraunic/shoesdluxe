Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("#token").getAttribute('value');
new Vue({
el: 'body',
data:{
	libros:[],

}, 
ready: function() {
	this.getlibros();
	},
methods: {
	getlibros: function(){
			this.$http.get('/getlibros').then(function(response){
				this.$set('libros', response.data);
			});
		},
	agregar: function($id_libro){
		alert();
		//this.$http.get('/detalle',{id_libro:id_libro}).then(function(response))
	}
},
});