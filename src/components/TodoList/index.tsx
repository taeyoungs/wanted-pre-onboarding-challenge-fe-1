import useTodos from './hooks/useTodos';
import TodoForm from 'components/TodoForm';

function TodoList() {
  const { data: todos } = useTodos();

  return (
    <section>
      <h2>Todo List</h2>
      <TodoForm />
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
