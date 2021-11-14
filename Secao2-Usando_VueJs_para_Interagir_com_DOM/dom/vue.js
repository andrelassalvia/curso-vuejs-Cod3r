new Vue({
  el: "#app",
  data: {
    titulo: "Usando o VueJs",
    link: "http://google.com",
  },
  methods: {
    saudacao() {
      return this.titulo;
    },
  },
});
