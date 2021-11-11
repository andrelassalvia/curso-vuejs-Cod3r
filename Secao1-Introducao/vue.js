new Vue({
  el: "#app",
  data: {
    titulo: "Usando o VueJs",
  },
  methods: {
    alterarTitulo(event) {
      this.titulo = event.target.value;
    },
  },
});
