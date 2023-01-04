import { useMutation, useQueryClient } from '@tanstack/react-query';

import deleteTodo from 'api/todo/deleteTodo';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries([{ scope: 'todo' }]);
    },
  });
};

export default useDeleteTodo;
