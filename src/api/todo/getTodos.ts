import { axiosInstance } from 'api';

import type { IResponseBody, ITodo } from 'api/types';

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