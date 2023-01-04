import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import deleteTodo from 'api/todo/deleteTodo';
import { todoKeys } from 'factory';

const useDeleteTodo = (selectedId: string) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: async () => {
      queryClient.invalidateQueries(todoKeys.all());

      if (id === selectedId) {
        navigate('/', { replace: true });
      }
    },
  });
};

export default useDeleteTodo;
