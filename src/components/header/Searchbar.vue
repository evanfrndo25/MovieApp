<template>

    <div class="flex mt-3 relative">
        
        <!-- input search -->
        <input ref="searchBox" type="text" class="rounded-full bg-gray-600 px-7 w-50 h-10 focus:outline-none focus:outline-shawod" placeholder= "Search..." @input="debounceSearch" v-model="searchTerm" @focus="handleFocus" />

        <!-- icon search-->
        <div class="absolute top-0 ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" class="fill-current w-4 text-gray-500 mt-2 ml-2 mt-3">
        </div>

        <!-- Search Result -->
        <div  class="absolute mt-10 ml-2 rounded bg-gray-700 w-52 z-50">
              <ul class="mt-1" v-if="showSearchResult">
                  <li :key="index" v-for="(movie, index) in searchResult" >
                      <router-link :to="'/movie/'+movie.id"
                       @click.native="showSearchResult = false" 
                       class="flex items-center border-b p-2 ">
                          <img :src="posterPath(movie.poster_path)" alt="" class="w-10">
                          <span class="ml-3">{{ movie.title }}</span>
                      </router-link>
                  </li>
              </ul>
              <!-- no result found -->
              <ul class="px-3" v-else >
                  <li v-if="noResultFound" class="p-3">No result found for "{{ searchTerm }}"</li>
              </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            searchResult: [],
            searchTerm: "" ,
            showSearchResult: false ,
        }
    },
    mounted() {
        this.keyboardEvents();
    }
    ,
    methods: {
        debounceSearch(event) {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                //minim character input
                if(event.target.value.length > 2) {
                    this.fetchSearch(event.target.value);
                }
            }, 300);
        },

        async fetchSearch(term) {
            try {
                const response = await this.$http.get("/search/movie?query=" + term)
                this.searchResult = response.data.results;
                this.showSearchResult = response.data.results ? true : false;
            } catch(error) {
                console.log(error);
            }
        },
        handleFocus() {
            if (this.searchTerm != "") {
                this.showSearchResult = true;
            } 
        },
        keyboardEvents(){
            let windowObj = this;

            window.addEventListener("click", (e)=> {
                if(!this.$el.contains(e.target)){
                    this.showSearchResult = false;
                }
            })
            window.addEventListener("keypress", (e)=> {
                if (e.keyCode == "47") {
                    e.preventDefault();
                    windowObj.$refs.searchBox.focus();
                }
            });

            window.addEventListener("keydown", (e) => {
                if(e.key == "Escape") {
                    this.showSearchResult = false;
                }
            });
        },
        posterPath(poster_path) {
            if (poster_path) {
                return "https://image.tmdb.org/t/p/w500/" + poster_path; 
            } else {
                return "https://via.placeholder.com/50x75";
            }
        }

    }
}
</script>

<style></style>