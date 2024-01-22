import Image from "next/image";
import styles from '@/styles/components/Movie.module.scss';
import Link from "next/link";

const Movie = ({ movie }) => {
  return (
    <Link href={`/movie/details/${movie.imdbID}`} className={styles.link}>
      <Image src={movie.Poster} alt={movie.Title} width={144} height={240} className="img"/>
      <h6>{movie.Title}</h6>
      <p>{movie.Year}</p>
    </Link>
  );
};

export default Movie;
