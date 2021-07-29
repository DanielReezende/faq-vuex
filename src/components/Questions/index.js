export default {
  name: 'Questions',
  computed: {
    $singleCategory() {
      return this.$store.getters.$singleCategory;
    }
  },
  methods: {
    goToAnswer(question) {
      this.$store.dispatch('getSingleQuestion', question);
      this.$store.dispatch('changeCurrentComponent', 'Answer');
    },
    goToFaq() {
      this.$store.dispatch('changeCurrentComponent', 'FaqCategories');
    },
    getImage(item) {
      return require(`@/assets/images/${item.icon}`);
    }
  }
};
