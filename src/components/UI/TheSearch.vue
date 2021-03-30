<template>
  <div class="the-search">
    <div class="input-container">
      <div class="input-content">
        <input
          type="text"
          v-model="search"
          v-on:keyup.enter="searchJoke"
          placeholder="Search Juch joke..."
        />
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div class="error-msg">
      <p style="color: red">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: null,
    };
  },
  computed: {
    ...mapState(["errorMsg"]),
  },
  methods: {
    searchJoke() {
      const srchObj = {
        value: this.search,
      };
      this.$store.commit("SET_SERCH_HISTORY", srchObj);
      this.$store.dispatch("searchJoke", this.search);
      this.search =""
    },
  },
};
</script>

<style lang="scss" scoped>
.the-search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
    @media screen and (max-width: 1240px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error-msg {
    width: 250px;
    line-height: 2;
    margin-bottom: 5px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    .input-content {
      display: grid;
      grid-template-columns: 90% 10%;
      border: 1px solid #42b983;
      max-width: 400px;
      width: 100%;
      border-radius: 25px;
      padding: 10px 20px;
 
      input,
      i {
        line-height: 2;
        background: transparent;
        outline: none;
        border: none;
        color: #42b983;
      }
    }
  }
}
</style>