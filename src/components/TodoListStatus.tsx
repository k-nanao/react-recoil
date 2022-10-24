import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatusState } from '../State/selector';

const TodoListStatus = () => {
  const totalNum = useRecoilValue(todoListStatusState);

  return <div>登録しているtodoの数:{totalNum}</div>;
};

export default TodoListStatus;
