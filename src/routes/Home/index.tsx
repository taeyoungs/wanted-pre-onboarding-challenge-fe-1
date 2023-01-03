import { Suspense } from 'react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { css } from '@emotion/css';

import TodoList from 'components/TodoList';
import { todosQuery } from './queryOptions';
import { loader } from './utils';

interface IDefferedLoaderData {
  todos: ReturnType<ReturnType<typeof todosQuery>['queryFn']>;
}

function Home() {
  const { todos } = useLoaderData() as IDefferedLoaderData;

  return (
    <section>
      <h1>Home</h1>
      <div
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        `}
      >
        <Suspense fallback={<div>Loading ...</div>}>
          <Await resolve={todos}>
            <TodoList />
          </Await>
        </Suspense>
        <Outlet />
      </div>
    </section>
  );
}

Home.loader = loader;

export default Home;
