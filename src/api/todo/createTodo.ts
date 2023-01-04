import { axiosInstance } from 'api';

import type { IResponseBody, ITodo } from 'api/types';

interface ICreateTodoParams {
  title: string;
  content: string;
}

const createTodo = async (params: ICreateTodoParams) => {
  const token = localStorage.getItem('token');

  return axiosInstance
    .post<IResponseBody<ITodo>>('/todos', params, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data.data);
};

export default createTodo;
