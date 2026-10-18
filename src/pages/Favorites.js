import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  async function fetchFavoritesAndMovies() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("საჭიროა ავტორიზაცია");
    }

    try {
      const fav = await axios.get(`https://adi.duck.ge/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const moviesRes = await axios.get(`https://adi.duck.ge/api/movies`);

      setFavorites(fav.data);
      setMovies(moviesRes.data.data);
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => {
    fetchFavoritesAndMovies();
  }, []);

  const favoriteMovies = movies.filter((movie) =>
    favorites.some((fav) => fav.movie_id === movie.id),
  );

  return (
    <div className="container">
      <h1>ფავორიტი ფილმები</h1>
      <div className="products">
        {favoriteMovies.length === 0 ? (
          <p className="noFav">არ გაქვთ ფავორიტი ფილმი არჩეული</p>
        ) : (
          favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
