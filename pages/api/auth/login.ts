import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import db from "../../../utils/db";

db();

type ResponseModel = {
  status: string;
  message: string;
  data?: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseModel>
) {
  try {
    if (req.method === "POST") {
      const { username, password } = req.body;
      User.find({ username })
        .then((response: any) => {
          if (response) {
            const userPassword = response[0].password;
            if (password === userPassword) {
              res.json({
                status: "SUCCESS",
                message: "User logged in successfully!",
                data: response[0],
              });
            } else {
              res.json({
                status: "FAILED",
                message: "Please enter correct credentials and try again!",
              });
            }
          }
        })
        .catch((error: any) => {
          res.json({
            status: "FAILED",
            message: "Please enter correct credentials and try again!",
          });
        });
    }
  } catch (error: any) {
    console.log(error);
  }
}
