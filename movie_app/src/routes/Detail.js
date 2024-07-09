import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from './../Movie';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    {movies.map((movie) => (
                    <Movie                    
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                    />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Detail;