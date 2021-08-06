<template>
    <div class="container">
        <div class="row no-gutters">
            <div class="col-12 mt-2 p-3">
                <h5 class="mb-0">Movies</h5>
            </div>
        </div> 
        <div class="row no-gutters">
            <div class="col-12 mt-2">
                <input type="text" id="searchmovie" name="searchmovie" placeholder="Search Movie Name" v-on:keyup=searchMovie />
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-12 mt-2">
                <span class="d-block" v-for="item in movies" :key="item.id">
                    <a href="#" v-on:click="routeToDetails(item._id, $event)">{{item.title}}</a> 
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { getAllMovies, searchMovieByName } from '../services/MovieServices'

export default {
    name: 'Landing',
    data() {
        return {
            movies: []
        }
    },
    methods: {
        getAllMoviesList() {
            var $this = this;
            getAllMovies().then(response => {
                console.log(response);
                $this.movies = response;
            });
        },
        searchMovie: function(event) {
            var $this = this;
            //if(event.target.value.length > 5) {
                console.log("search for movie:"+event.target.value);
                searchMovieByName(event.target.value).then(response => {
                    console.log(response);
                    $this.movies = response;
                });
            //}
        },
        routeToDetails(key, event) {
            event.preventDefault();
            this.$router.push('/moviedetails/' + key)
        }
    },
    mounted() {
        this.getAllMoviesList();
    }
}
</script>