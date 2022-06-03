import type { NextPage } from "next";
import Head from "next/head";
import Register from "../components/Register/Register.component";

import styles from "../styles/Home.module.css";

const register: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Register />
      </>
    </div>
  );
};

export default register;