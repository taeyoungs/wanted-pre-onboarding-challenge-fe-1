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
  const response = await axiosInstance.post('/users/login', params);

  return response.data.data as ILoginResponseBody;
};

export default login;
