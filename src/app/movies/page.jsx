import styles from "@/styles/layout/Movies.module.scss";
import Movie from "@/components/movie/page";

// In production move api key
const BASE_URL = "https://www.omdbapi.com/?apikey=35b97ba4&";

const getMarvelMovies = async () => {
  const response = await fetch(`${BASE_URL}s=marvel`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();

  return data.Search;
};

const Movies = async () => {
  const movies = await getMarvelMovies();

  return (
    <section className={styles.container}>
      <article>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Movies;
