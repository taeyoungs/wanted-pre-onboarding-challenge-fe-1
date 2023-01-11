import { useQuery } from '@tanstack/react-query';
import { useAsyncValue } from 'react-router-dom';

import { todosQuery } from 'routes/Home/queryOptions';

const useTodos = () => {
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todosQuery>['queryFn']>
  >;

  return useQuery({
    ...todosQuery(),
    initialData,
  });
};

export default useTodos;
