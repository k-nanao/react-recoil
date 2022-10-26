import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../State/atom';

const TodoItemCreator = () => {
  const [title, setTitle] = useState<string>('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        // useStateの
        title: title,
        isComplete: false,
      },
    ]);
    setTitle('');
  };

  return (
    <div>
      <div className='inner'>
        <input type='text' onChange={(e) => handleChange(e)} value={title} />
        <button onClick={() => handleAdd()}>追加</button>
      </div>
    </div>
  );
};

export default TodoItemCreator;

let id = 1;
function getId() {
  return id++;
}
