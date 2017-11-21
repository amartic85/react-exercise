import React, { Component } from 'react';
import darkknight_img from '../images/darkknight.jpg';
import shawshank_img from '../images/shawshank.jpg';
import fightClub_img from '../images/fightClub.jpg';
import cuckoo_img from '../images/cuckoo.jpg';
import vertigo_img from '../images/vertigo.jpg';
import metropolis_img from '../images/metropolis.jpg';
import amadeus_img from '../images/amadeus.jpg';
import ethernalSunshine_img from '../images/ethernalSunshine.jpg';
import thruman_img from '../images/thruman.jpg';
import greatbeauty_img from '../images/greatbeauty.jpg';
import bridgeSpies_img from '../images/bridgeSpies.jpg';
import contratiempo_img from '../images/contratiempo.jpg';
import MovieTile from './MovieTile.js';



class MovieCollection extends Component{
    constructor(props){
        super(props);
        this.allMovies = 
            [
                {
                    title: "THE DARK NIGHT",
                    year: "2008",
                    director: "Christopher Nolan",
                    image: darkknight_img
                },
                {
                    title: "THE SHAWSHANK REDEMPTION",
                    year: "1994",
                    director: "Frank Darabont",
                    image: shawshank_img
                },
                {
                    title: "FIGHT CLUB",
                    year: "1999",
                    director: "David Fincher",
                    image: fightClub_img
                },
                {
                    title: "ONE FLEW OVER THE CUCKOO'S NEST",
                    year: "1975",
                    director: "Milos Forman",
                    image: cuckoo_img
                },
                {
                    title: "VERTIGO",
                    year: "1958",
                    director: "Alfred Hitchcock",
                    image: vertigo_img
                },
                {
                    title: "METROPOLIS",
                    year: "1927",
                    director: "Fritz Lang",
                    image: metropolis_img
                },
                {
                    title: "AMADEUS",
                    year: "1984",
                    director: "Milos Forman",
                    image: amadeus_img
                },
                {
                    title: "ETERNAL SUNSHINE OF THE SPOTLESS MIND",
                    year: "2004",
                    director: "Michel Gondry",
                    image: ethernalSunshine_img
                },
                {
                    title: "THE TRUMAN SHOW",
                    year: "1998",
                    director: "Peter Weir",
                    image: thruman_img
                },
                {
                    title: "THE GREAT BEAUTY",
                    year: "2013",
                    director: "Paolo Sorrentino",
                    image: greatbeauty_img
                },
                {
                    title: "Bridge of Spies",
                    year: "2015",
                    director: "Steven Spielberg",
                    image: bridgeSpies_img

                },
                {
                    title: "Contratiempo",
                    year: "2016",
                    director: "Oriol Paulo",
                    image: contratiempo_img

                }


            ];
        this.state = {
            movies: this.allMovies
        };
    }

    render () {
        var movieTiles = this.state.movies.map(function(movie){
            return (
                
                <MovieTile key = {movie.title} imgSrc = {movie.image} movieTitle={movie.title} year={movie.year} director={movie.director}/>
            );
        });
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '20px 20px 20px 20px', flexWrap: 'wrap'}}>
                {movieTiles}
            </div>
        );    
    }



}

export default MovieCollection;