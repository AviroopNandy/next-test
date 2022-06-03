import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import apiAuth from "../../api/auth";

import globalStyles from "../../styles/globalStyles.module.css";

type LoginModel = {
  username: string;
  password: string;
};

const Login: NextPage = (): JSX.Element => {
  const [userData, setUserData] = useState<LoginModel>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiAuth.login(userData);
      console.log(response);
      if (response && response.status === "SUCCESS") {
        Swal.fire({
          icon: "success",
          text: response.message,
        }).then(() => {
          window.location.href = "/dashboard";
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={globalStyles.container}>
        <div className={globalStyles.main}>
          <h1 className={globalStyles.heading}>Sign In</h1>
          <form
            className={globalStyles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={globalStyles.inputBox}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                required
              />
            </div>
            <div className={globalStyles.inputBox}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
              />
            </div>
            <div className={globalStyles.inputButton}>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
