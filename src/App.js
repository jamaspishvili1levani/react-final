import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddMovie from "./pages/AddMovie";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import Register from "./pages/Register";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
