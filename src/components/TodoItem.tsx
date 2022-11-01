import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../State/atom';
import { ITEMPROPS } from '../types/DataType';

const TodoItem: React.FC<ITEMPROPS> = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = (id: number) => {
    const newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodos);
  };

  const toggleCompletion = (id: number, isComplete: boolean) => {
    const toggleChecked = todoList.map((todo) => {
      if (todo.id === id) {
        return {...todo, isComplete: !isComplete}
      }
      return todo;
    });
    setTodoList(toggleChecked);
  };

  return (
    <div>
      <div key={todo.id}>
        <button onClick={() => toggleCompletion(todo.id, todo.isComplete)}>
          {todo.isComplete ? '完了' : '未完了'}
        </button>
        {todo.title}
        <span className='deletefunc' onClick={() => deleteItem(todo.id)}>
          削除
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
