<template>
    <div class="">

        <!-- Image route id -->
        <router-link :to="`/tv/${tv.id}`"  >
            <img :src="tvposterPath" alt="" class="w-50 hover:opacity-75 transition easy-in-out duration-150">
        </router-link>
        

        <!-- description -->
        <h3>{{ tv.name }}</h3>
        <div class="flex">
             <img class="fill-current w-5" src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt="">
             <h2 class="pl-2">{{ tv.vote_average * 10 }} % | {{ tv.first_air_date }}</h2>
        </div>
        <span class="text-lg text-gray-200">
        </span>
        <!-- description -->

    </div>
</template>

<script>
export default {
    props: {
        tv: {
            required: true,
        },
        genres: {
            required: true,
        },
    },
    computed: {
        //image
        tvposterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.tv.poster_path; 
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