<template>
  <div class="faq-categories">
    <header>
      <div class="image-header">
        <img src="@/assets/images/astronaut.svg" alt="astronaut" />
      </div>
      <div class="text-header">
        <h2>Perguntas frequentes</h2>
        <p>Escolha a categoria desejada</p>
      </div>
    </header>

    <main>
      <ul class="categories">
        <li
          class="category-item"
          v-for="category in $allCategories"
          @click="goToQuestions(category)"
          :key="category.id"
        >
          <img :src="getImage(category)" :alt="`Ícone do ${category.title}`" />
          <p>{{ category.title }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./styles.css"></style>
