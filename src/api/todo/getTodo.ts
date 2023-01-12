import { QueryFunctionContext } from '@tanstack/react-query';

import { axiosInstance } from 'api';
import { todoKeys } from 'lib/react-query/factory';

import type { IResponseBody, ITodo } from 'api/types';

const getTodo = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ReturnType<typeof todoKeys['detail']>>) => {
  const [{ id }] = queryKey;

  return axiosInstance
    .get<IResponseBody<ITodo>>(`/todos/${id}`, {
      ...(signal && { signal }),
    })
    .then((res) => res.data.data);
};

export default getTodo;
