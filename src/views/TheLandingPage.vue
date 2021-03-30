<template>
  <div class="landing-page">
    <div class="container">
      <div class="random-joke" v-if="!isHistory">
        <img :src="radnomJoke.icon_url" alt="icon" />
        <p>{{ radnomJoke.value }}</p>
      </div>
      <div class="search-joke" v-if="isHistory">
        <div
          class="jokes-container"
          v-for="(joke, index) in jokes"
          :key="joke.id"
        >
          <img :src="joke.icon_url" alt="icon" />
          <p>Jonke no. {{ index + 1 }}</p>
          <router-link
            :to="{
              name: 'SingleFact',
              params: { id: joke.id },
            }"
          >
            <button class="btn">Look more</button>
          </router-link>
        </div>
      </div>
    </div>
    <the-add-joke></the-add-joke>
  </div>
</template>

<script>
import TheAddJoke from "../components/UI/TheAddJoke.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { TheAddJoke },
  data() {
    return {};
  },
  mounted() {
    this.setJokes();
  },

  computed: {
    ...mapState(["jokes", "radnomJoke", "isHistory"]),
    ...mapActions(["getRandomJoke"]),
  },
  methods: {
    setJokes() {
      this.$store.dispatch("getRandomJoke");
    },
  },
};
</script>
<style lang="scss">
.landing-page {
  display: grid;
  grid-template-columns: 80% 20%;
  @media screen and (max-width: 1240px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .container {
    padding: 0.75%;
  }
  .random-joke {
    width: 18.5%;
    margin: 0.75%;
    padding: 1%;
    box-sizing: border-box;
    background: #282c35;
    border-radius: 25px;
    color: #fefefe;
  }

  .search-joke {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 1240px) {
      margin: 0 auto;
    }
    .jokes-container {
      width: 150px;
      margin: 0.75%;
      padding: 1%;
      box-sizing: border-box;
      background: #282c35;
      border-radius: 25px;
      color: #fefefe;
      @media screen and (max-width: 1240px) {
        margin: 2% auto;
      }
      .btn {
        border: 1px solid #42b983;
        border-radius: 25px;
        background: #42b983;
        padding: 5px 15px;
        outline: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>