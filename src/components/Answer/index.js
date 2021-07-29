export default {
  name: 'Answer',
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion;
    }
  },
  methods: {
    goToQuestions() {
      this.$store.dispatch('changeCurrentComponent', 'Questions');
    }
  }
};
