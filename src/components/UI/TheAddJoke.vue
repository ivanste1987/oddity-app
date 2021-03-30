<template>
  <div class="input-container">
    <div class="input-content">
      <input type="text" v-model="desc" placeholder="Add new joke..." v-on:keyup.enter="addNewJoke"/>
      <i class="fas fa-plus-circle fa-lg"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: null,
      newJoke: {},
    };
  },
  methods: {
    addNewJoke() {
      this.newJoke = {
        id: Date.now(),
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: this.desc,
      };
     
      this.$store.commit("ADD_JOKE", this.newJoke);
      this.desc =""
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  .input-content {
    display: grid;
    grid-template-columns: 90% 10%;
    border: 1px solid #42b983;
    width: 60%;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 5% auto;
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
</style>