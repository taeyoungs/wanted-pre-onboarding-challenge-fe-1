import { QueryFunctionContext } from '@tanstack/react-query';

import { axiosInstance } from 'api';
import { todoKeys } from 'lib/react-query/factory';

import type { IResponseBody, ITodo } from 'api/types';

const getTodo = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof todoKeys['detail']>>) => {
  const [{ id }] = queryKey;
  const token = localStorage.getItem('token');

  return axiosInstance
    .get<IResponseBody<ITodo>>(`/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data.data);
};

export default getTodo;
