import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  async function getMovies() {
    try {
      const res = await axios.get(`https://adi.duck.ge/api/movies`);
      setMovies(res.data.data);
    } catch (e) {
      console.log(`error:`, e);
    }
  }

  async function addToFavorites(id, title) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("გაიარე ავტორიზაცია");
      return;
    }

    try {
      await axios.post(
        `https://adi.duck.ge/api/favorites`,
        { movie_id: id },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert(`${title} დაემატა ფავორიტებში`);
    } catch (e) {
      console.log(`error`, e);
      alert("შეცდომა");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("საიტის გამოსაყენებლად გაიარე ავტორიზაცია");
    }

    getMovies();
  }, []);

  return (
    <div className="container">
      <h1>ფილმები</h1>

      <div className="search">
        <input
          type="text"
          placeholder="ძებნა სათაურით..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="products">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToFavorites={addToFavorites}
            />
          ))}
      </div>
    </div>
  );
}
