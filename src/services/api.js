import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODliNmM5YWQxOTI1NDc1MzZmOGU0MTMyNTllOGNlMCIsInN1YiI6IjYyOWRkNjEwZDIxNDdjMTE3ZTVlODE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N311euHIVwBbWOXA58KeqEF-IpFBSuR6Rt7YPPYd97U";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});