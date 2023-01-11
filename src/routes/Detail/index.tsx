import { Suspense } from 'react';
import { Await, Navigate, useLoaderData, useParams } from 'react-router-dom';

import Todo from 'components/Todo';

import { todoQueryOption } from 'lib/react-query/options';
import { loader } from './utils';

interface IDefferedLoaderData {
  todo: ReturnType<ReturnType<typeof todoQueryOption>['queryFn']>;
}

function Detail() {
  const { id } = useParams();
  const { todo } = useLoaderData() as IDefferedLoaderData;

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return (
    <section>
      <h2>할일 상세</h2>
      <Suspense fallback={<div>Loading ...</div>}>
        <Await resolve={todo}>
          <Todo id={id} />
        </Await>
      </Suspense>
    </section>
  );
}

Detail.lodaer = loader;

export default Detail;
