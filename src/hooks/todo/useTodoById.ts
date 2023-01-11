import { useQuery } from '@tanstack/react-query';
import { useAsyncValue } from 'react-router-dom';

import { todoQueryOption } from 'lib/react-query/options';

const useTodoById = (id: string) => {
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todoQueryOption>['queryFn']>
  >;

  return useQuery({
    ...todoQueryOption(id),
    initialData,
  });
};

export default useTodoById;
