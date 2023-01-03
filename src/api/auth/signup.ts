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
  return axiosInstance.post<ISignUpResponseBody>('/users/create', params).then((res) => res.data);
};

export default signUp;
