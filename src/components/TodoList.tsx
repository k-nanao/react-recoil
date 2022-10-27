import { useRecoilValue } from 'recoil';
import { todoListState } from '../State/atom';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListStatus from './TodoListStatus';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h1>初めてのRecoil</h1>
      <TodoListStatus />
      <TodoItemCreator />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
