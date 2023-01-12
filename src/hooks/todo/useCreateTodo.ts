import { useMutation, useQueryClient } from '@tanstack/react-query';

import createTodo from 'api/todo/createTodo';
import { todoKeys } from 'lib/react-query/factory';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries(todoKeys.all());
    },
  });
};

export default useCreateTodo;
