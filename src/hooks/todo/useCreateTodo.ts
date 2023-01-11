import { useMutation, useQueryClient } from '@tanstack/react-query';

import createTodo from 'api/todo/createTodo';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries([{ scope: 'todo' }]);
    },
  });
};

export default useCreateTodo;
