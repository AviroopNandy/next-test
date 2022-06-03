import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login/Login.component";

import styles from "../styles/Home.module.css";

const login: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Login />
      </>
    </div>
  );
};

export default login;
