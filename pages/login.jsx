import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/login.module.css";

import Auth from "@/utils/auth";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (Auth.username === username && Auth.password === password) {
      router.push("/dashboard");
      localStorage.setItem("auth", true);
    } else {
      <p className={styles.errorMessage}> Username e/o password non corretti! </p>;
    }
  };

  return (
    <div className={styles.wrapperLogin}>
      <form onSubmit={onHandleSubmit}>
        <input type="text" value={username} onChange={onHandleUsername} placeholder="Insert your username" required />
        <input type="password" value={password} onChange={onHandlePassword} placeholder="Insert your password" required />
        <input type="submit" value="Login" />
      </form>
      <button>
        <Link href="/"> Back </Link>
      </button>
    </div>
  );
};

export default Login;
