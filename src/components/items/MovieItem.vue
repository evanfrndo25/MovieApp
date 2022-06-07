<template>
    <div class="">

        <!-- Image route id -->
        <router-link :to="`/movie/${movie.id}`" >
            <img :src="posterPath" alt="" class="w-50 hover:opacity-75 transition easy-in-out duration-150">
        </router-link>
        

        <!-- description -->
        <h3>{{ movie.title }}</h3>
        <div class="flex">
             <img class="fill-current w-5" src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt="">
             <h2 class="pl-2">{{ movie.vote_average * 10 }} % | {{ movie.release_date }}</h2>
        </div>
        <span class="text-lg text-gray-200">
            <span :key="genre" v-for="(genre, index) in movie.genre_ids ">{{ genreTypeName(genre, index) }}</span>
        </span>
        <!-- description -->

    </div>
</template>

<script>
export default {
    props: {
        movie: {
            required: true,
        },
        genres: {
            required: true,
        },
    },
    computed: {
        //image
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path; 
        }
    },
    methods: {
        //genre
        genreTypeName(genraId, index){
           for (const item of this.genres) {
               if (item.id == genraId) {
                   if(this.movie.genre_ids.length - 1 == index) {
                       return item.name;
                   } else {
                       return item.name + " | ";
                   }
               }
           }
        }
    }
};
</script>

<style></style>