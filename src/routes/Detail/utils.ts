import { QueryClient } from '@tanstack/react-query';
import { defer, LoaderFunctionArgs, redirect } from 'react-router-dom';

import { todoQuery } from './queryOptions';

const loader =
  (queryClient: QueryClient) =>
  ({ params }: LoaderFunctionArgs) => {
    const id = params['id'];

    if (!id) {
      return redirect('/');
    }

    const todoQueryOptions = todoQuery(id);

    return defer({
      todo: queryClient.fetchQuery({ ...todoQueryOptions }),
    });
  };

export { loader };
