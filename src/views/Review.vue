<script setup>

import { REVIEW_BASE_URL} from '../utils';
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core';

console.log('here')

const route = useRoute();
const reviewId = route.params.id;

const { data } = await useFetch(REVIEW_BASE_URL+reviewId+'?populate=*').json();
const reviewData = data.value.data.attributes;


// console.log(data);

</script>


<template>

    <div>
        <img :src="reviewData.image.data.attributes.url" height="220" />
        <h2> {{ reviewData.name }} </h2>
        <p> {{ reviewData.description}} </p>
        <p><strong> Ratings: {{ Number(reviewData.ratings)}} </strong></p>
        <p><strong> Release Date: {{ reviewData.releasedate}} </strong></p>
        <p> <strong> Review: </strong> <br> {{ reviewData.movieReview}} </p>
        

    </div>


</template>

<style>

</style>
