new Vue({
  el: "#app",
  data: {
    titulo: "Usando o VueJs",
  },
  methods: {
    saudacao() {
      return this.titulo;
    },
  },
});
