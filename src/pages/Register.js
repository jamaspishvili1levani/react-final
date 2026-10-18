import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  async function register() {
    const url = `https://adi.duck.ge/api/register`;

    try {
      await axios.post(url, {
        name,
        email,
        password,
        password_confirmation: confirmation,
      }); 
      window.location.href = "/login";
    } catch (e) {
      alert(`შეცდომა`);
      console.log(e);
    }
  }

  return (
    <div className="container">
      <h1>რეგისტრაციის გვერდი</h1>

      <input
        placeholder="სახელი..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="ელ.ფოსტა..."
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="პაროლი..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="გაიმეორეთ პაროლი..."
        type="password"
        value={confirmation}
        onChange={(e) => setConfirmation(e.target.value)}
      />

      <button onClick={register}>რეგისტრაცია</button>
    </div>
  );
}
