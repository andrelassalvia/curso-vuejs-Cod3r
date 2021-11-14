new Vue({
  el: "#app",
  data: {
    titulo: "Usando o VueJs",
  },
  methods: {
    alterarTitulo(event) {
      console.log(event);
      this.titulo = event.target.value;
    },
  },
});
