<template>
  <div class="answer">
    <header>
      <button type="button" @click="goToQuestions()" class="header-button">
        <div class="arrow"></div>
      </button>
      <div class="header-text">
        <h2>{{ $singleQuestion.title }}</h2>
      </div>
    </header>
    <p v-html="$singleQuestion.content" class="content"></p>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./styles.css"></style>
