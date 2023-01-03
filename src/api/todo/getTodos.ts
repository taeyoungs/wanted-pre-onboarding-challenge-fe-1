import { axiosInstance } from 'api';

import type { IResponseBody } from 'api/types';

interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const getTodos = async () => {
  const token = localStorage.getItem('token');

  return axiosInstance
    .get<IResponseBody<ITodo[]>>('/todos', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data.data);
};

export default getTodos;
