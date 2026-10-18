import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginFunc() {
    const url = `https://adi.duck.ge/api/login`;

    try {
      const res = await axios.post(url, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (e) {
      alert(`შეცდომა`);
      console.log(e);
    }
  }

  return (
    <div className="container">
      <h1>ავტორიზაცია</h1>

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

      <button onClick={loginFunc}>შესვლა</button>
    </div>
  );
}
