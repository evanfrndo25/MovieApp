<template>
    <div class="container mx-auto px-4 py-4">

        <!-- Header -->
        <h2 class="text-4xl font-semibold border-b mb-5">Images</h2>

        <!-- List -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div :key="index" v-for="(image, index) in images" class="mr-2 mt-2">
                <img :src="tvImage(image)" alt="" class="hover:opacity-75 transition easy-in-out duration-150" />
            </div>  
        </div>

    </div>
</template>

<script>

export default {
    props: {
        images: {
            required: true,
        }
    },
    methods: {
        tvImage(image) {
            if(image.file_path) {
                return "https://image.tmdb.org/t/p/w300/" + image.file_path;
            } else {
                return "https://via.placeholder.com/300x450/"; 
            }
        }
    }
};
</script>

<style></style>

