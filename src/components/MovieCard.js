export default function MovieCard({ movie, onAddToFavorites }) {
  return (
    <div className="product">
      <h4>{movie.title}</h4>
      <p>
        {movie.genre} ({movie.year})
      </p>
      <p>{movie.description}</p>

      {onAddToFavorites && (
        <button onClick={() => onAddToFavorites(movie.id, movie.title)}>
          ფავორიტებში დამატება
        </button>
      )}
    </div>
  );
}
