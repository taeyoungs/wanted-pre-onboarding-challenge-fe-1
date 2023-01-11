import { QueryClient } from '@tanstack/react-query';
import { defer, LoaderFunctionArgs, redirect } from 'react-router-dom';

import { todoQueryOption } from 'lib/react-query/options';

const loader =
  (queryClient: QueryClient) =>
  ({ params }: LoaderFunctionArgs) => {
    const id = params['id'];

    if (!id) {
      return redirect('/');
    }

    const queryOption = todoQueryOption(id);

    return defer({
      todo: queryClient.fetchQuery(queryOption),
    });
  };

export { loader };
