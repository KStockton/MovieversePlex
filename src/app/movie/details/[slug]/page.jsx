import Image from "next/image";
import styles from "@/styles/components/MovieDetails.module.scss";

const getMoveDetails = async (slug) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${slug}&apikey=35b97ba4&s`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
};

const MovieDetails = async ({ params }) => {
  const { slug } = params;

  const movie = await getMoveDetails(slug);

  return (
    <section className={styles.movieContainer}>
      <article>
        <aside>
          <header>
            <h3>{movie.Title}</h3>
          </header>
          <ul>
            <li>{movie.Year}</li>
            <li>{movie.Rated}</li>
            <li>{movie.Language}</li>
          </ul>
        </aside>
        <aside></aside>
      </article>
      <section>
        <aside>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={300}
            height={500}
          />
        </aside>
        <aside>
          <header>
            <h6>Plot</h6>
            <p>{movie.Plot}</p>
          </header>
          <header>
            <h6>Actors</h6>
            <p>{movie.Actors}</p>
          </header>
          {movie.Ratings.map((rating, index) => (
            <header key={index}>
              <h6>{rating.Source}</h6>
              <p>{rating.Value}</p>
            </header>
          ))}
        </aside>
      </section>
    </section>
  );
};

export default MovieDetails;
