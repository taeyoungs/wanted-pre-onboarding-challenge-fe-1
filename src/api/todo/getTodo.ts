import { QueryFunctionContext } from '@tanstack/react-query';

import { axiosInstance } from 'api';
import { todoKeys } from 'lib/react-query/factory';

import type { ITodo } from 'api/types';

const getTodo = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ReturnType<typeof todoKeys['detail']>>) => {
  const [{ id }] = queryKey;

  const response = await axiosInstance.get(`/todos/${id}`, {
    ...(signal && { signal }),
  });

  return response.data.data as ITodo;
};

export default getTodo;
