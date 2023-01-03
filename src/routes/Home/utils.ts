import { QueryClient } from '@tanstack/react-query';
import { defer } from 'react-router-dom';

import { todosQuery } from './queryOptions';

const loader = (queryClient: QueryClient) => () => {
  const todosQueryOptions = todosQuery();

  return defer({
    todos: queryClient.fetchQuery(todosQueryOptions),
  });
};

export { loader };
