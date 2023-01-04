import { useMutation, useQueryClient } from '@tanstack/react-query';

import updateTodo from 'api/todo/updateTodo';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries([{ scope: 'todo' }]);
    },
  });
};

export default useUpdateTodo;
