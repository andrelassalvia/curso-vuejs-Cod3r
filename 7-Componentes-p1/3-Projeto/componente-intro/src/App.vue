<template>
  <!-- Criacao de um projeto -->
  <div id="app">
    <h1>Contador</h1>
    {{ contador }}
  </div>
</template>

<script>
export default {
  el: "#app",
  data() {
    return {
      contador: 0,
    };
  },
};
</script>
