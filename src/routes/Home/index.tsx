import { Suspense } from 'react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { css } from '@emotion/css';

import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';

import { todosQueryOption } from 'lib/react-query/options';
import { loader } from './utils';

interface IDefferedLoaderData {
  todos: ReturnType<ReturnType<typeof todosQueryOption>['queryFn']>;
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
          gap: 30px;
        `}
      >
        <section>
          <h2>할일 목록</h2>
          <TodoForm />
          <Suspense fallback={<div>Loading ...</div>}>
            <Await resolve={todos}>
              <TodoList />
            </Await>
          </Suspense>
        </section>
        <Outlet />
      </div>
    </section>
  );
}

Home.loader = loader;

export default Home;
