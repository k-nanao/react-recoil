/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatusState } from '../State/selector';
import { css } from '@emotion/react'

const TodoListStatus = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum } =
    useRecoilValue(todoListStatusState);

  return (
    <div>
      <ul>
        <li css={hellostyle}>Todoの登録数: {totalNum}</li>
        <li>完了数: {totalCompletedNum}</li>
        <li css={hellostyle}>未完了数: {totalUnCompletedNum}</li>
      </ul>
    </div>
  );
};

const hellostyle = css({
  color:'red'
})

export default TodoListStatus;
