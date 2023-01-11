import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from 'api/todo';

import { todoKeys } from 'lib/react-query/factory';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries(todoKeys.all());
    },
  });
};

export default useUpdateTodo;
