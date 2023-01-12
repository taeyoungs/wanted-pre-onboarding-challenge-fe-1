import { axiosInstance } from 'api';

interface ISignUpParameters {
  email: string;
  password: string;
}

interface ISignUpResponseBody {
  message: string;
  token: string;
}

const signUp = async (params: ISignUpParameters) => {
  const response = await axiosInstance.post('/users/create', params);

  return response.data.data as ISignUpResponseBody;
};

export default signUp;
