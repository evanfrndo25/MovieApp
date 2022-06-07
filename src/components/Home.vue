<template>
    <div class="container mx-auto p-2">
        <PopularMovies />
        <PopularTv />
    </div>
</template>

<script>
import PopularMovies from "./PopularMovies.vue";
import PopularTv from "./PopularTv.vue"

export default {
    components: {
        PopularMovies,
        PopularTv
    }
};
</script>

<style></style>