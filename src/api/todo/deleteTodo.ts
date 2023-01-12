import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

type IDeleteTodoParams = Pick<ITodo, 'id'>;

const deleteTodo = async ({ id }: IDeleteTodoParams) => {
  const response = await axiosInstance.delete(`/todos/${id}`);

  return response.data.data as null;
};

export default deleteTodo;
