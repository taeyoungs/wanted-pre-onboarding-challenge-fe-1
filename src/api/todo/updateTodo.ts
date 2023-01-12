import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IUpdateTodoParams = Pick<ITodo, 'title' | 'content' | 'id'>;

const updateTodo = async ({ title, content, id }: IUpdateTodoParams) => {
  return axiosInstance.put(`/todos/${id}`, { title, content }).then((res) => res.data.data);
};

export default updateTodo;
