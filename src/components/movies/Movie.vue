<template>
   
    <div>

         <!-- Detail Movie-->
        <div class="container mx-auto flex mt-20 border-b pb-10 p-2">
            <img :src="posterPath" alt="" class="w-64" />

        <!-- description -->
        <div class="p-10">

            <h2 class="text-4xl font-semibold ">{{ this.movie.title }}</h2>
            
            <div class="flex mt-4">
                <img class="fill-current w-5" src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt="" />
                <span class="ml-3 text-gray-700 text-sm"> {{ this.movie.vote_average * 10 }} % | {{ this.movie.release_date }}  <span class="ml-2 text-yellow-300" :key="index" v-for="(item, index) in movie.genres"> {{ item.name }} <span v-if="(movie.genres.length - 1 != index)"> |</span> </span> </span>
            </div>
            

            <p class="mt-5">{{ this.movie.overview }}</p>
            
    
            
            <div class="mt-5">

                <span class="mt-5 font-semi-bold">Featured Cast</span>

                <div class="flex">
                    <div  :key="index" v-for="(crew, index) in movie.credits.crew">
                         <div class="flex flex-col mt-5 mr-5" v-if="index < 2">
                            <span>{{ crew.name }}</span>
                            <span class="text-gray-700">{{ crew.job }}</span>
                         </div>
                    </div>

                </div>
                
            </div>

            <!-- button -->
            <div class="mt-10">

                <!-- left-->
                <a @click.prevent="openYoutubeModel" target="blank" class="rounded bg-yellow-600 px-5 py-4 inline-flex" style="cursor:pointer;">
                    <img src="https://i.pinimg.com/736x/cf/60/8a/cf608ab5deafb9a9753a58fd40d7b12c.jpg" alt="" class="w-6 fill-current">
                    <span class="ml-4">Play Trailer</span>
                </a>

                <!-- Right -->
                <a href="#" class="rounded bg-yellow-600 px-5 py-4 inline-flex ml-5">
                    <img src="https://toppng.com/uploads/preview/how-to-set-use-red-white-heart-icon-png-love-heart-11563411236sl0ynpmn4w.png" alt="" class="w-6 fill-current">
                    <span class="ml-4">Favorite</span>
                </a>

            </div>
            <!-- button -->
    
            </div>

        </div>

        <!-- CAST -->
        <Cast  :casts="movie.credits.cast" />

        <!-- IMAGES -->
        <Images :images="movie.images.backdrops" />

        <!-- modals -->
        <MediaModel v-model="modelOpen" :mediaURL="mediaURL" />

    </div>
</template>

<script>
import Cast from "./Cast.vue"
import Images from "./Images.vue"
import MediaModel from "../models/MediaModel"

export default {
    components: {
        Cast,
        Images,
        MediaModel,
        MediaURL: "",
    },
    data() {
        return {
            movie: {
                credits: {
                    crew: {},
                },
                images: {
                    backdrops: {},
                }
            },
            modelOpen: false,
            isVideo: false
        };  
    },
    mounted() {
        this.fetchMovie(this.$route.params.id)
    },
    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get("/movie/" + movieId + "?append_to_response=credits,videos,images");
            this.movie = response.data;
        },
        openYoutubeModel(){
            this.mediaURL = this.youtubeVideo();
            this.isVideo = true;
            this.modelOpen = true;
        },
        openImageModel(){
            this.isVideo = false;
            this.modelOpen = true;
        },
        youtubeVideo() {
            if(!this.movie.videos) return;
            return "https://www.youtube.com/embed/" + this.movie.videos.results[0].key           
        }
    },
    computed: {
        //image
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path; 
        },
    }
};
</script>


<style></style>

