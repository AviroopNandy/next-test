import type { NextPage } from "next";
import Head from "next/head";
import RegisterComponent from "../components/Register/Register.component";

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <RegisterComponent />
      </>
    </div>
  );
};

export default Register;
