export default {
  name: 'FaqCategories',
  created() {
    this.$store.dispatch('fetchFaqCategories');
  },
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories;
    }
  },
  methods: {
    goToQuestions(category) {
      this.$store.dispatch('changeCurrentComponent', 'Questions');
      this.$store.dispatch('getSingleCategory', category);
    },
    getImage(item) {
      return require(`@/assets/images/${item.icon}`);
    }
  }
};
