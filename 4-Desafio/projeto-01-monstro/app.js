new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    bundao: "",
  },
  computed: {
    hasResult() {
      return this.playerLife <= 0 || this.monsterLife <= 0;
    },
    scorePlayer() {
      if (this.playerLife <= 0) {
        return (this.playerLife = "0");
      } else if (this.playerLife >= 100) {
        return (this.playerLife = "100");
      } else {
        return this.playerLife;
      }
    },
    scoreMonstro() {
      if (this.monsterLife <= 0) {
        return (this.monsterLife = "0");
      } else if (this.monsterLife >= 100) {
        return (this.monsterLife = "100");
      } else {
        return this.monsterLife;
      }
    },
  },
  methods: {
    atacar() {
      this.playerLife -= Math.random() * 10;
      this.playerLife = this.playerLife.toFixed(0);
      this.monsterLife -= Math.random() * 5;
      this.monsterLife = this.monsterLife.toFixed(0);
    },
    especial() {
      this.playerLife -= Math.random() * 5;
      this.playerLife = this.playerLife.toFixed(0);
      this.monsterLife -= Math.random() * 10;
      this.monsterLife = this.monsterLife.toFixed(0);
    },
    curar() {
      this.playerLife = Number(this.playerLife) + Number(Math.random() * 8);
      this.playerLife = this.playerLife.toFixed(0);
      this.monsterLife = Number(this.monsterLife) + Number(Math.random() * 8);
      this.monsterLife = this.monsterLife.toFixed(0);
    },
    desistir() {
      // Zerar marcado do jogador
      this.playerLife = 0;
      // Mostrar frase
      this.bundao = "bundao";
    },

    iniciar() {
      (this.playerLife = 100),
        (this.monsterLife = 100),
        (this.bundao = ""),
        (this.running = true);
    },
  },
  watch: {
    // watch monitora sempre que houver mudanca em uma variavel e aplica um metodo
    hasResult(value) {
      if (value) {
        this.running = false;
      }
    },
  },
});
