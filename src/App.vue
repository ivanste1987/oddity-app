<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Landing page</router-link>
      <div class="serch-joke">
        <the-search></the-search>
      </div>

      <div class="history">
        <the-serch-history></the-serch-history>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
import TheSearch from "./components/UI/TheSearch.vue";
import TheSerchHistory from "./components/UI/TheSerchHistory.vue";
export default {
  components: {
    TheSearch,
    TheSerchHistory,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  background: #1a2228;
}

#nav {
  box-sizing: border-box;
  padding: 30px;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #232b2b;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
  }
}
</style>
