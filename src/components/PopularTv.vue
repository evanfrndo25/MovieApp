<template>
    <div class="mt-20">
        <div class="mx-5">

        <!-- Label -->
        <h2 class="mt-5 text-yellow-500 uppercase font-semibold text-4xl border p-4">
            Popular Tv
        </h2>

        <!-- Content -->
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-20">
            <Tvitem :key="tv.id" v-for="tv in tvs" :tv="tv" />
        </div>

    </div>
    </div>
</template>


<script>
import Tvitem from  "./items/Tvitem.vue"

export default {
    components: {
        Tvitem,
    },
    data: function() {
        return {
            tvs: []
        };
    },
    async mounted() {
        try {
            const response = await this.$http.get("/tv/popular");
            this.tvs = response.data.results;
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
         
    }
    
};
</script>

<style></style>