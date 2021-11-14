new Vue({
  el: "#app",
  data: {
    titulo: "Usando o VueJs",
    link: "http://google.com",
  },
  methods: {
    saudacao() {
      this.titulo = "Bom dia";
      return this.titulo;
    },
  },
});

// v-once - para que a renderizacao ocorra uma unica vez. A partir de entao o VueJs para de monitorar o comportamento daquele elemento.
