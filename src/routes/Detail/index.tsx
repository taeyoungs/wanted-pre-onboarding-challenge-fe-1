import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import Todo from 'components/Todo';

import { todoQuery } from './queryOptions';
import { loader } from './utils';

interface IDefferedLoaderData {
  todo: ReturnType<ReturnType<typeof todoQuery>['queryFn']>;
}

function Detail() {
  const { todo } = useLoaderData() as IDefferedLoaderData;

  return (
    <section>
      <h2>Todo Detail</h2>
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
