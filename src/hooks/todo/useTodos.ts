import { useQuery } from '@tanstack/react-query';
import { useAsyncValue } from 'react-router-dom';

import { todosQueryOption } from 'lib/react-query/options';

const useTodos = () => {
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todosQueryOption>['queryFn']>
  >;

  return useQuery({
    ...todosQueryOption(),
    initialData,
  });
};

export default useTodos;
