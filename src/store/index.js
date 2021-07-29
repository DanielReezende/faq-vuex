import { createStore } from 'vuex';
import { faqCategories } from '@/utils/db.json';

export default createStore({
  state: {
    faqCategories: [],
    currentComponent: 'FaqCategories',
    singleCategory: {},
    singleQuestion: {}
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload;
    },
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload;
    },
    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCategory = payload;
    },
    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload;
    }
  },
  actions: {
    fetchFaqCategories(context) {
      const data = faqCategories;

      context.commit('SET_FAQ_CATEGORIES', data);
    },
    changeCurrentComponent(context, payload) {
      context.commit('SET_CURRENT_COMPONENT', payload);
    },
    getSingleCategory(context, payload) {
      context.commit('SET_SINGLE_CATEGORY', payload);
    },
    getSingleQuestion(context, payload) {
      context.commit('SET_SINGLE_QUESTION', payload);
    }
  },
  getters: {
    $allCategories(state) {
      return state.faqCategories;
    },
    $currentComponent(state) {
      return state.currentComponent;
    },
    $singleCategory(state) {
      return state.singleCategory;
    },
    $singleQuestion(state) {
      return state.singleQuestion;
    }
  }
});
