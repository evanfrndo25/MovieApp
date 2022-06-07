<template>
    <div class="container mx-auto px-4 py-4">

        <!-- Header -->
        <h2 class="text-4xl font-semibold border-b mb-5 ">Recomendation</h2>

        <!-- List -->
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-2">
            <div class="mr-2 " :key="index" v-for="(cast, index) in casts">
                <img :src="castProfileImage(cast)" alt="" class="hover:opacity-75 transition easy-in-out duration-150" />
                <span class="text-white">{{ cast.name }} </span>
            </div>         
        </div>

    </div>
</template>

<script>
export default {
    props: {
        recomend: {
            requried: true,
        }
    
    }
}
</script>