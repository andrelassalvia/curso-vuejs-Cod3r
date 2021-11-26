new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    running: false,
    logs: [],
  },
  methods: {
    attack(especial) {
      this.hurt("monsterLife", 5, 10, especial, "Jogador", "Monstro", "player");
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },

    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },

    hurt(player, min, max, especial, source, target, cls) {
      const plus = especial ? 3 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[player] = Math.max(this[player] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt}`, cls);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      console.table(value);
      return Math.round(value);
    },

    healAndHurt() {
      this.heal(10, 15);
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },

    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Jogador recuperou ${heal}`, "player");
    },

    begin() {
      this.playerLife = 100;
      this.monsterLife = 100;
      this.running = true;
      this.logs = [];
    },

    giveup() {
      this.running = false;
    },
  },
  computed: {
    hasResult() {
      return this.playerLife === 0 || this.monsterLife === 0;
    },
  },
  watch: {
    hasResult(value) {
      if (value) {
        this.running = false;
      } else {
        this.running = true;
      }
    },
  },
});
