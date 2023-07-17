import Link from "next/link";
import React, { createContext } from "react";
import styles from "../styles/main.module.css";

export const GeneralContext = createContext({
  user: {
    name: "Giovanni",
    surname: "Geraci",
    age: 23,
  },

  reservationList: [
    {
      id: Math.floor(Math.random() * 100),
      numReservation: Math.floor(Math.random() * 100),
    },
  ],
});

export default function Main() {
  return (
    <>
      <div className={styles.wrapperLink}>
        <ul className={styles.ulWrapper}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
