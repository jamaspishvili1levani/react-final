import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">მთავარი</Link>
      <Link to="/favorites">ფავორიტები</Link>
      <Link to="/add-movie">დამატება</Link>
      <Link to="/login">შესვლა</Link>
      <Link to="/register">რეგისტრაცია</Link>
    </nav>
  );
}
