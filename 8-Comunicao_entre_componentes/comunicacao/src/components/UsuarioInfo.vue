<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do Usuario: <strong>{{idade}}</strong></p>

        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from "../barramento";
export default {
  props: {
    nome: {
      type: String,
      default: "Anonimo",
    },
    idade: {
      type: Number,
      default: undefined,
    },
    reiniciarFn: Function,
  },
  created() {
    barramento.$on("idadeMudou", (idade) => {
      this.idade = idade;
    });
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = "Pedro";
      //   vamos criar um evento personalizado para ser ouvido pelo elemento pai
      this.$emit("nomeMudou", {
        novo: this.nome,
        antigo,
      });
    },
  },
};
</script>


<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
