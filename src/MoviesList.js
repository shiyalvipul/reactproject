import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7e33a8665b14e3c290b296c99cfa7418&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

      const movie = await res.json();
      // console.log(movie);
      this.setState({
        movies: movie.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}


export default MoviesList;

const MovieGrid = styled.div`
display: grid;
padding: 1rem;
grid-template-columns: repeat(4,1fr);
grid-row-gap: 1rem;
`;
