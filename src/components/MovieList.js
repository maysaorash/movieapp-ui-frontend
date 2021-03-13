import React from 'react'
import PropTypes from 'prop-types'

function MovieList(props) {
    const movieList = <div>Movies List here....</div>
    const emptyMessage = <div>Thereare no movies yet...</div>

    return (
      <div>{props.movies.length === 0 ? emptyMessage : movieList}</div>
    )
}

MovieList.propTypes = {movies:PropTypes.array.isRequired}


export default MovieList

