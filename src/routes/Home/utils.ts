import { QueryClient } from '@tanstack/react-query';
import { defer } from 'react-router-dom';

import { todosQueryOption } from 'lib/react-query/options';

const loader = (queryClient: QueryClient) => () => {
  const queryOption = todosQueryOption();

  return defer({
    todos: queryClient.fetchQuery(queryOption),
  });
};

export { loader };
