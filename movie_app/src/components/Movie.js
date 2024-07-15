import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres }) {
  return <div>
    <img src={coverImg} alt="title" className={style.movie_img}></img>
    <h2 className={style.movie_title}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <h3 className={style.movie_year}>{year}</h3>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>;
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;