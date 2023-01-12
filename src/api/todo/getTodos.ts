import { axiosInstance } from 'api';

import type { IResponseBody, ITodo } from 'api/types';

const getTodos = async () => {
  return axiosInstance.get<IResponseBody<ITodo[]>>('/todos').then((res) => res.data.data);
};

export default getTodos;
