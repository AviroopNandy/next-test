import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import apiAuth from "../api/auth";

import styles from "../styles/Home.module.css";

type UserModel = {
  // fullName: string;
  // email: string;
  // mobile: string;
  username: string;
  password: string;
};

const Home: NextPage = () => {
  const [userData, setUserData] = useState<UserModel>({
    // fullName: "",
    // email: "",
    // mobile: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(userData);
      // const response = await axios({
      //   method: "POST",
      //   url: "/api/auth/login",
      //   data: userData,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // console.log(response);

      const response = await apiAuth.login(userData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <input
            type="text"
            placeholder="Full Name"
            value={userData.fullName}
            onChange={(e) =>
              setUserData({ ...userData, fullName: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={userData.mobile}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
            required
          /> */}
          <input
            type="text"
            placeholder="Username"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Home;
