import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // map over movieData array of objects and return an array of JSX
  // in other words, dynamically creating MovieCard components
  generateMovieCards = () => {
    return movieData.map(m => <MovieCard title={m.title} IMDBRating={m.IMDBRating} genres={m.genres} poster={m.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
