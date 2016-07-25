Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("#token").getAttribute('value');
new Vue({
	//atributos
	el: 'body', //ambiente de trabajo de vue
	data: {
		carIdioma: false,
		newIdioma: "",
		idiomas: [],
		listaidiomas:[],

		carEditorial: false,
		newEditorial: "",
		newTelefono: "",
		editoriales: [],
		listaEditoriales:[],

		carAutor: false,
		newAutor: "",
		id_Autores: [],
		listaautores:[],
		id_idiomas:"",
		id_editorial:"",
		coautor:[],
	},

	//acciones precargadas al inicio de la pagina
	ready: function() {
		this.getIdiomas();
		this.getEditoriales();
		this.getAutores();
		
		
	},	
	//metodos
	methods:{
		cargaautores:function(autor,i){
			var autor_ch=document.getElementById("test2"+i).checked;
			console.log(autor_ch);
			if(autor_ch){
				this.id_Autores.push(autor);
			}
			else{
				this.id_Autores.$remove(autor);
			}
		
		},
		getIdiomas: function(){
			this.$http.get('/administrador/libros/create/idiomas').then(function(response){
				this.$set('idiomas', response.data);
			});
		},
		getEditoriales: function(){
			this.$http.get('/administrador/libros/create/editoriales').then(function(response){
				this.$set('editoriales', response.data);
			});
		},
		getAutores: function(){
			this.$http.get('/administrador/libros/create/autores').then(function(response){
				this.$set('autores', response.data);
			});
		},
		//efecto para que aparesca el boton de insertar idioma
		agregarIdioma: function(){
			
			this.carIdioma = !this.carIdioma;
		},
		agregarEditorial: function(){
		
			this.carEditorial = !this.carEditorial;
		},
		agregarAutor: function(){
			
			this.carAutor = !this.carAutor;
		},
		storeIdioma: function(){
			//peticion AJAX
			this.$http.post('/administrador/libros/create/storeIdioma', {'nombre': this.newIdioma}).then(function(response){
				this.idiomas.push(response.data);
				Materialize.toast('Idioma agregado correctamente', 3500)
				this.newIdioma = "";
			},function(error) {
				Materialize.toast('Ingresa un idioma válido!!', 3500)
				this.newIdioma = "";
			});
		},
		storeEditorial: function(){
			//peticion AJAX
			this.$http.post('/administrador/libros/create/storeEditorial', {'Nombre': this.newEditorial, 'telefono': this.newTelefono}).then(function(response){
				this.editoriales.push(response.data);
				Materialize.toast('Editorial agregado correctamente', 3500)
				this.newEditorial = "";
				this.newTelefono= "";
			},function(error) {
				Materialize.toast('Ingresa un editorial válido!!', 3500)
				this.newEditorial = "";
				this.newTelefono= "";
			});
		},
		storeAutor: function(){
			//peticion AJAX
			this.$http.post('/administrador/libros/create/storeAutor', {'Nombre': this.newAutor}).then(function(response){
				this.autores.push(response.data);
				Materialize.toast('Autor agregado correctamente', 3500)
				this.newAutor = "";
			},function(error) {
				Materialize.toast('Ingresa un Autor válido!!', 3500)
				this.newAutor = "";
			});
		},
		removeIdioma: function(idioma){
			console.log(idioma);
			this.$http.post('/administrador/libros/create/deleteIdioma', {'id_idioma': idioma.id_idioma}).then(function(response){
				console.log(response.data);
				this.idiomas.$remove(idioma);
				Materialize.toast('Se ha borrado el  Idioma', 3500)
			});	
		},

		removeEditorial: function(editorial){
			console.log(editorial);
			this.$http.post('/administrador/libros/create/deleteEditorial', {'id_editorial': editorial.id_editorial}).then(function(response){
				console.log(response.data);
				this.editoriales.$remove(editorial);
				Materialize.toast('Se ha borrado el Editorial', 3500)
			});
		},
		removeAutor: function(autor){
			console.log(autor);
			this.$http.post('/administrador/libros/create/deleteAutor', {'id_Autor': autor.idAutor}).then(function(response){
				console.log(response.data);
				this.autores.$remove(autor);
				Materialize.toast('Se ha borrado el Autor ', 3500)
			});	
		},

	}
});

