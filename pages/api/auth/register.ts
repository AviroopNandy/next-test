import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../utils/db";
import User from "../../../models/User";

db();

type ResponseModel = {
  status: string;
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseModel>
) {
  try {
    if (req.method === "POST") {
      let { fullName, email, mobile, username, password } = req.body;
      const newUser = new User({
        fullName,
        email,
        mobile,
        username,
        password,
      });
      newUser
        .save()
        .then((response: any) => {
          res.json({
            status: "SUCCESS",
            message: "User registered successfully!",
            data: response,
          });
        })
        .catch((error: any) => {
          res.json({
            status: "FAILED",
            message:
              "An unexpected error occurred while registering! Please check your internet connection and try again...",
          });
        });
    }
  } catch (error: any) {
    console.log(error);
  }
}
