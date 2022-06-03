import type { NextPage } from "next";
import { useSelector } from "react-redux";

type UserModel = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  username: string;
};

const Todo: NextPage = (): JSX.Element => {
  const user: UserModel = useSelector((state: any) => state.user.value);

  return (
    <>
      <div>
        <h1>Logged in user details: </h1>
        <h2>Full Name: {user?.fullName}</h2>
        <h2>E-mail ID: {user?.email}</h2>
        <h2>Mobile Number: {user?.mobile}</h2>
        <h2>Username: {user?.username}</h2>
      </div>
    </>
  );
};

export default Todo;
