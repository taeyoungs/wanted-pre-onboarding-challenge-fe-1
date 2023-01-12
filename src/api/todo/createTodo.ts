import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

interface ICreateTodoParams {
  title: string;
  content: string;
}

const createTodo = async (params: ICreateTodoParams) => {
  const response = await axiosInstance.post('/todos', params);

  return response.data.data as ITodo;
};

export default createTodo;
