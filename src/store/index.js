import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state() {
    return {
      jokes: [],
      radnomJoke: {},
      searchHistory: [],
      errorMsg: null,
      isHistory: false,
    };
  },
  mutations: {
    ADD_JOKE(state, data) {
      state.jokes.push(data);
    },
    SET_SERCH_JOKES(state, data) {
      state.jokes = data;
    },
    SET_RANDOM_JOKES(state, data) {
      state.radnomJoke = data;
    },
    SET_SERCH_HISTORY(state, data) {
      state.isHistory = true;

      const findValue = state.searchHistory.find(
        (item) => item.value === data.value
      );
      if (findValue) {
        return;
      } else {
        state.searchHistory.unshift(data);
      }
      if (state.searchHistory.length > 10) {
        state.searchHistory.pop();
      }
    },
    SET_ERROR_MSG(state, data) {
      state.errorMsg = data;
    },
  },
  actions: {
    async getRandomJoke(context) {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random"
        );

        if (response.status === 200) {
          context.commit("SET_RANDOM_JOKES", response.data);
        } else {
          context.commit(
            "SET_ERROR_MSG",
            "Something went wrong, please try again."
          );
        }
      } catch (error) {
        if (error) {
          context.commit("SET_ERROR_MSG", error.response.data.message);
        }
      }
    },
    async searchJoke(context, payload) {
      try {
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${payload}`
        );

        if (response.data.result.length === 0) {
          context.commit("SET_ERROR_MSG", "We didnt find anything for you.");
        } else {
          context.commit("SET_ERROR_MSG", "");
        }
        if (response.status === 200) {
          context.commit("SET_SERCH_JOKES", response.data.result);
        }
      } catch (error) {
        if (error) {
          context.commit("SET_ERROR_MSG", error.response.data.message);
        }
      }
    },
  },
});

export default Store;
