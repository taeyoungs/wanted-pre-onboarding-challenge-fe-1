import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IDeleteTodoParams = Pick<ITodo, 'id'>;

const deleteTodo = async ({ id }: IDeleteTodoParams) => {
  return axiosInstance.delete(`/todos/${id}`);
};

export default deleteTodo;
