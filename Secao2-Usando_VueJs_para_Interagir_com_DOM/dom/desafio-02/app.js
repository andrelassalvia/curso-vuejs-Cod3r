new Vue({
  el: "#desafio",
  data: {
    valor: "",
    valorEnter: "",
  },
  methods: {
    clickAlerta() {
      return alert("Botao clicado");
    },
    valorKey(e) {
      this.valor = e.target.value;
      // console.log(e.key);
    },
    enter(e) {
      if (e.key == "Enter") {
        this.valorEnter = e.target.value;
      }
    },
  },
});
