import type { NextPage } from "next";
import Router from "next/router";

import globalStyles from "../../styles/globalStyles.module.css";
import styles from "./Home.module.css";

const Home: NextPage = (): JSX.Element => {
  const handleRedirect = (pathname: string) => {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      Router.push(`/${pathname}`);
    } else {
      Router.push("/todo");
    }
  };

  return (
    <>
      <div className={globalStyles.container}>
        <h1>To-Do List</h1>
        <h2>A single platform to maintain all your to-do activities online!</h2>
        <div className={styles.buttonContainer}>
          <button onClick={(e) => handleRedirect("register")}>
            Create Account
          </button>
          <button onClick={(e) => handleRedirect("login")}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Home;
