import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import Todo from 'components/Todo';

import { todoQueryOption } from 'lib/react-query/options';
import { loader } from './utils';

interface IDefferedLoaderData {
  todo: ReturnType<ReturnType<typeof todoQueryOption>['queryFn']>;
}

function Detail() {
  const { todo } = useLoaderData() as IDefferedLoaderData;

  return (
    <section>
      <h2>할일 상세</h2>
      <Suspense fallback={<div>Loading ...</div>}>
        <Await resolve={todo}>
          <Todo />
        </Await>
      </Suspense>
    </section>
  );
}

Detail.lodaer = loader;

export default Detail;
