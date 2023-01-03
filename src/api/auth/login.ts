import { axiosInstance } from 'api';

interface ILoginParameters {
  email: string;
  password: string;
}

interface ILoginResponseBody {
  message: string;
  token: string;
}

const login = async (params: ILoginParameters) => {
  return axiosInstance.post<ILoginResponseBody>('/users/login', params).then((res) => res.data);
};

export default login;
