<script setup>
import { ALL_REVIEWS_URL } from '../utils';
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';
import { ref, computed } from 'vue';

const { data } = await useFetch(ALL_REVIEWS_URL).json();

const reviews = data.value.data;
const searchQuery = ref('');

const filteredReviews = computed(() => {
  if (!searchQuery.value) {
    return reviews;
  }
  return reviews.filter(review =>
    review.attributes.movieName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    review.attributes.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="Search reviews..." />

    <ul class="reviews">
      <li v-for="review in filteredReviews" :key="review.id">
        <RouterLink :to="`/review/${review.id}`">
          <img :src="review.attributes.image.data.attributes.url" height="120" />
          <h3>{{ review.attributes.movieName }}</h3>
          <p>{{ review.attributes.description }}</p>
          <strong>Ratings: {{ review.attributes.ratings }}</strong>
          <br>
          <strong>Release Date: {{ review.attributes.releasedate }}</strong>
          <br>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reviews {
  list-style-type: none;
  padding: 0;
}

.reviews li {
  margin-bottom: 20px;
}
</style>
