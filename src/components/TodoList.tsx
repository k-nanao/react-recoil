import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import { todoListStatusState } from './selector';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const totalNum = useRecoilValue(todoListStatusState);
  console.log(todoList);
  console.log(totalNum);

  return (
    <div>
      <h1>初めてのRecoil</h1>
      {todoList.map((todo) => (
        <>
          <ul>
            <li>todoの登録数{totalNum}</li>
          </ul>
          <div key={todo.id}>{todo.title}</div>
        </>
      ))}
    </div>
  );
};

export default TodoList;
