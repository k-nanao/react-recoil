import React from 'react';
import { DATA } from '../types/DataType';

// interface PROPS {
//   id: number;
//   todo: string;
//   title: string;
//   isComplete: boolean;
// }

const TodoItem: React.FC<DATA> = ({ todo }) => {
  return (
    <div>
      <ul key={todo.id}></ul>
      <div key={todo.id}>{todo.title}</div>
    </div>
  );
};

export default TodoItem;
