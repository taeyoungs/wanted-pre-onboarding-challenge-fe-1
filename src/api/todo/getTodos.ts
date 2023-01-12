import { axiosInstance } from 'api';

import type { ITodo } from 'api/types';

const getTodos = async () => {
  const response = await axiosInstance.get('/todos');

  return response.data.data as ITodo[];
};

export default getTodos;
