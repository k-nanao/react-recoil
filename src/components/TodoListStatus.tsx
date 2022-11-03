import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatusState } from '../State/selector';

const TodoListStatus = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum } =
    useRecoilValue(todoListStatusState);

  return (
    <div>
      <ul>
        <li>Todoの登録数: {totalNum}</li>
        <li>完了数: {totalCompletedNum}</li>
        <li>未完了数: {totalUnCompletedNum}</li>
      </ul>
    </div>
  );
};

export default TodoListStatus;
