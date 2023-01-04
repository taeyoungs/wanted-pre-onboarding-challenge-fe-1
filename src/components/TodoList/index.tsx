import TodoItem from 'components/TodoItem';
import useTodos from './hooks/useTodos';

function TodoList() {
  const { data: todos } = useTodos();

  return (
    <ul>
      {todos.map(({ id, title, content }) => (
        <TodoItem key={id} title={title} id={id} content={content} />
      ))}
    </ul>
  );
}

export default TodoList;
