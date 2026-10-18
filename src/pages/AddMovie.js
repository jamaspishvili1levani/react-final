import { useState, useEffect } from "react";
import axios from "axios";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  async function handleAddMovie() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("საჭიროა ავტორიზაცია!");
      return;
    }

    try {
      await axios.post(
        `https://adi.duck.ge/api/movies`,
        { title, description, year: Number(year), genre },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      alert(`${title} დაემატა`)
      setTitle("");
      setDescription("");
      setYear("");
      setGenre("");
    } catch (e) {
      console.log(e);
      alert("შეცდომა");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("საიტის გამოსაყენებლად გაიარე ავტორიზაცია");
    }
  }, []);

  return (
    <div className="container">
      <h1>ახალი ფილმის დამატება</h1>
      <div>
        <input
          placeholder="სათაური..."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="აღწერა..."
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="წელი..."
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          placeholder="ჟანრი..."
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <button onClick={handleAddMovie}>დამატება</button>
      </div>
    </div>
  );
}
