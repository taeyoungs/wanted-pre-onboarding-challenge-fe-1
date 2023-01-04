import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IUpdateTodoParams = Pick<ITodo, 'title' | 'content' | 'id'>;

const updateTodo = async ({ title, content, id }: IUpdateTodoParams) => {
  const token = localStorage.getItem('token');

  return axiosInstance
    .put(
      `/todos/${id}`,
      { title, content },
      {
        headers: {
          Authorization: token,
        },
      },
    )
    .then((res) => res.data.data);
};

export default updateTodo;
