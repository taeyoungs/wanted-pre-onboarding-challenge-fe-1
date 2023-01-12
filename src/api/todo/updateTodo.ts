import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IUpdateTodoParams = Pick<ITodo, 'title' | 'content' | 'id'>;

const updateTodo = async ({ title, content, id }: IUpdateTodoParams) => {
  const response = await axiosInstance.put(`/todos/${id}`, { title, content });

  return response.data.data as ITodo;
};

export default updateTodo;
