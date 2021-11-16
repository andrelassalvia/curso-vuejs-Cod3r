new Vue({
  el: "#desafio",
  data: {
    eu: {
      nome: "Andre",
      idade: "45",
      foto: "https://images.unsplash.com/photo-1636839270984-1f7cbc2b4c4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  },
  methods: {
    calc(n) {
      return this.eu.idade * n;
    },
    random() {
      return Math.random();
    },
  },
});
