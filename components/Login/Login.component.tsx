import type { NextPage } from "next";
import Router from "next/router";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import apiAuth from "../../api/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/User";

import globalStyles from "../../styles/globalStyles.module.css";

type LoginModel = {
  username: string;
  password: string;
};

const Login: NextPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.value);

  const [userData, setUserData] = useState<LoginModel>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiAuth.login(userData);
      if (response && response.status === "SUCCESS") {
        Swal.fire({
          icon: "success",
          text: response.message,
        })
          .then(() => {
            sessionStorage.setItem("isLoggedIn", "true");
            dispatch(
              addUser({
                id: response.data._id,
                fullName: response.data.fullName,
                email: response.data.email,
                mobile: response.data.mobile,
                username: response.data.username,
              })
            );
            Router.push("/todo");
          })
          .catch((error: any) => {
            console.log(error);
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
