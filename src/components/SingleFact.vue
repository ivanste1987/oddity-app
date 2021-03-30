<template>
  <div class="container">
    <div class="single-fact">
      <img :src="joke.img" alt="icon" />
      <p>{{ joke.desc }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      jokeID: this.$route.params.id,
      joke: {},
    };
  },
  computed: {
    ...mapState(["jokes"]),
    backRouter() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.findJoke();
  },

  methods: {
    findJoke() {
      for (let i = 0; i < this.jokes.length; i++) {
        if (this.jokes[i].id == this.jokeID) {
          this.joke = {
            img: this.jokes[i].icon_url,
            desc: this.jokes[i].value,
          };

          console.log(this.joke);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  padding: 0.75%;
  .single-fact {
    width: 250px;
    margin: 0.75%;
    padding: 1%;
    box-sizing: border-box;
    background: #282c35;
    border-radius: 25px;
    color: #fefefe;
  }
}
</style>