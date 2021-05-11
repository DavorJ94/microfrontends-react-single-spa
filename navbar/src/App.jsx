import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          To do app
        </Link>
        <Link to="/trash" className={styles.link}>
          Trash
        </Link>
      </nav>
    </BrowserRouter>
  );
}
