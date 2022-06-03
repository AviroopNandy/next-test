import { authHeaders } from "../utils/authHeaders";
import { handleResponse } from "../utils/response";
import { USER_LOGIN, USER_REGISTER } from "../apiEndpoints";
import axios from "axios";

const resource = "/api/auth";

type LoginModel = {
  username: string;
  password: string;
};

type RegisterModel = {
  fullName: string;
  email: string;
  mobile: string;
  username: string;
  password: string;
};

class ApiAuth {
  login!: (model: LoginModel) => Promise<any>;
  register!: (model: RegisterModel) => Promise<any>;

  constructor() {
    this.login = async (model: LoginModel) => {
      const headers = authHeaders("");
      return axios
        .post(`${resource}/${USER_LOGIN}`, model, headers)
        .then(handleResponse)
        .catch(handleResponse);
    };

    this.register = async (model: RegisterModel) => {
      const headers = authHeaders("");
      return axios
        .post(`${resource}/${USER_REGISTER}`, model, headers)
        .then(handleResponse)
        .catch(handleResponse);
    };
  }
}

const apiAuth = new ApiAuth();

export default apiAuth;
