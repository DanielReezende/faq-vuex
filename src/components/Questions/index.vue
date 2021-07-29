<template>
  <div class="questions">
    <header>
      <button type="button" @click="goToFaq()" class="header-button">
        <div class="arrow"></div>
      </button>
      <div class="header-text">
        <h2>{{ $singleCategory.title }}</h2>
        <p>Selecione uma pergunta</p>
      </div>
      <img :src="getImage($singleCategory)" alt="" />
    </header>
    <ul class="questions-list">
      <li
        @click="goToAnswer(question)"
        v-for="question in $singleCategory.questions"
        :key="question.id"
        class="question-item"
      >
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./styles.css"></style>
