<template>
    <div class="container">
        <div class="row no-gutters">
            <div class="col-12 mt-2">
                <div>Title: {{movieInfo.title}}</div>
                <div>Genre: <span v-for="item in movieInfo.genres" :key="item.id">{{item}}</span></div>
                <div>Year Release: {{movieInfo.year}}</div>
                <div>Rotten Tomatoes Rating: {{movieInfo.tomatoes.viewer.rating}}</div>
                <div>IMDB Rating: {{movieInfo.imdb.rating}}</div>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-12 mt-5">
                <h5>Comments:</h5>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-12 mt-2">
                <div v-for="citem in movieComments" :key="citem.id">
                    <span>{{citem.name}}</span>: <span>{{citem.text}}</span>
                </div>
            </div>
        </div>

        <div class="row no-gutters">
            <div class="col-12 mt-2">
                <form id="commentForm" @submit="checkForm" method="post">
                    <p v-if="errorlength">
                        <b>Please correct the following errors</b>
                        <ul>
                            <li v-for="error in error" :key="error.id">{{error}}</li>
                        </ul>
                    </p>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" v-model="name" />
                    </div>
                    <div>
                        <label for="text">Comment:</label>
                        <input type="text" name="text" id="text" v-model="text" />
                    </div>
                    <div><input type="submit" value="submit" v-on:click="submitComment"/></div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { getMovieTitleDetails, getMovieIdComments, postMovieIdComments } from '../services/MovieServices'
    export default {
        name: 'MovieDetails',
        props: ['movieId'],
        data() {
            return {
                errors: [],
                name: null,
                text: null,
                movieInfo: [],
                movieComments: []
            }
        },
        mounted: function() {
            this.getMovieDetails();
            this.getMovieComments();
        },
        methods: {
           getMovieDetails: function() {
                var $this = this;
                console.log("getting movie details for:"+this.$props.movieId);
                getMovieTitleDetails(this.$props.movieId).then(response => {
                    console.log(response);
                    $this.movieInfo = response[0];
                });
            },
            getMovieComments: function() {
                var $this = this;
                console.log("getting movie comments for:"+this.$props.movieId);
                getMovieIdComments(this.$props.movieId).then(response => {
                    console.log(response);
                    $this.movieComments = response;
                });
            },
            checkForm: function(e){
                if(this.name && this.text){
                    e.preventDefault();
                    return true;
                }

                this.errors=[];
                if(!this.name){
                    this.errors.push('Name required');
                }
                if(!this.text){
                    this.errors.push('Comments required');
                }
                e.preventDefault();
            },
            submitComment: function() {
                var $this = this;
                console.log("submitting movie comments for:"+this.$props.movieId);
                postMovieIdComments(this.$props.movieId, this.name, this.text).then(response => {
                    console.log(response);
                    if(response) {
                        $this.getMovieComments();
                    }
                });
            }
        }
    }
</script>