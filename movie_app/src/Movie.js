import PropTypes from 'prop-types';

function Movie({coverImage, title, summary, genres}){
    return  <div>
    <img src={coverImage} alt="title"></img>
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>;
}

Movie.prototype = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genresL: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;