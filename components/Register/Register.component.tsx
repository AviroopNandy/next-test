import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import apiAuth from "../../api/auth";
import Swal from "sweetalert2";

import globalStyles from "../../styles/globalStyles.module.css";

type RegisterModel = {
  fullName: string;
  email: string;
  mobile: string;
  username: string;
  password: string;
};

const Register: NextPage = (): JSX.Element => {
  const [userData, setUserData] = useState<RegisterModel>({
    fullName: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiAuth.register(userData);
      console.log(response);
      if (response && response.status === "SUCCESS") {
        Swal.fire({
          icon: "success",
          text: response.message,
        }).then(() => {
          window.location.href = "/login";
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
          <h1 className={globalStyles.heading}>Create Account</h1>
          <form
            className={globalStyles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={globalStyles.inputBox}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
                required
              />
            </div>
            <div className={globalStyles.inputBox}>
              <label htmlFor="email">E-mail ID</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
            </div>
            <div className={globalStyles.inputBox}>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                value={userData.mobile}
                onChange={(e) =>
                  setUserData({ ...userData, mobile: e.target.value })
                }
                required
              />
            </div>
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
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
