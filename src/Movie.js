import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


function Movie({id, year, title, summary, poster, genres}){
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }
    return <div className="movie">
        <img className="movie_poster" src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <ul className="movie_genres">
                {genres.map((genre, index) => <li key={index} className="genres_genres">{genre}</li>)}
            </ul>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{isReadMore ? summary.slice(0,150) : summary}
                <span onClick={toggleReadMore} className="read-or-hide">{isReadMore ? "...read more" : " show less"}</span>
            </p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;