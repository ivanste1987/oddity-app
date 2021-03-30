<template>
  <div class="the-search">
    <div class="search-history">
      <div class="searches" v-for="hist in searchHistory" :key="hist.value">
        <button @click="searchHost(hist.value)">
          {{ hist.value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchHistory"]),
  },
  methods: {
    searchHost(event) {
      this.$store.dispatch("searchJoke", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-history {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;

  
  .searches {
    margin: 0 2px 2px 0;
    button {
      border: 1px solid #42b983;
      padding: 5px 15px;
      background: transparent;
      outline: none;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>