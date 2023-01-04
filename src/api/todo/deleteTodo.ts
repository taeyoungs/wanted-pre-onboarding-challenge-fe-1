import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IDeleteTodoParams = Pick<ITodo, 'id'>;

const deleteTodo = async ({ id }: IDeleteTodoParams) => {
  const token = localStorage.getItem('token');

  return axiosInstance.delete(`/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

export default deleteTodo;
