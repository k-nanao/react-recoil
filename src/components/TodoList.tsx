import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../State/atom';
import { INPUTVALUE } from '../types/DataType';
import TodoListStatus from './TodoListStatus';

const TodoList = () => {
  const [title, setTitle] = useState<INPUTVALUE | ''>('');
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h1>初めてのRecoil</h1>
      {todoList.map((todo) => (
        <>
          <ul key={todo.id}>
            <TodoListStatus />
          </ul>
          <div key={todo.id}>{todo.title}</div>
        </>
      ))}
    </div>
  );
};

export default TodoList;
