import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Movie from "./components/movies/Movie.vue"
import Tv from "./components/Tvs/Tv.vue"


let router = new VueRouter ({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home" ,
            component: Home ,
        },
        {
            path: "/movie/:id",
            name: "movie" ,
            component: Movie,
        },
        {
            path: "/tv/:id",
            name: "tv" ,
            component: Tv,
        }
    ],
});

export default router;