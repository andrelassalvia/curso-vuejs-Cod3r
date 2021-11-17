new Vue({
  el: "#desafio",
  data: {
    estilo: "destaque",
    valor: true,
    classe3: "",
    classe4: "",
    estilo5: {
      height: "100px",
      width: "100px",
    },
    cor: "",
    width: 0,
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.estilo = this.estilo == "destaque" ? "encolher" : "destaque";
      }, 2000);
    },
    iniciarProgresso() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
        if (valor == 100) {
          clearInterval(temporizador);
        }
      }, 1000);
    },
    setValor(event) {
      if (event.target.value == "true") {
        this.valor = true;
      } else if (event.target.value == "false") {
        this.valor = false;
      }
    },
  },
});
