<template>
  <div class="app">
    <div class="container">
      <transition
        name="slider"
        enter-active-class="animate__animated animate__fadeInRight"
        mode="out-in"
        appear
      >
        <component :is="$currentComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import FaqCategories from '@/components/FaqCategories/index.vue';
import Questions from '@/components/Questions/index.vue';
import Answer from '@/components/Answer/index.vue';

export default {
  components: {
    FaqCategories,
    Questions,
    Answer
  },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    }
  }
};
</script>

<style>
.app {
  display: grid;
  grid-template-columns: 310px;
  grid-template-rows: 30rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #9a9a9a;
}

.app > div.container {
  padding: 2rem 0.4rem;
  padding-bottom: 0.9rem;
  background-image: linear-gradient(to bottom, #3f4452, #2b2b2b);
  border-radius: 15px;
  -webkit-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  position: relative;
}
</style>
