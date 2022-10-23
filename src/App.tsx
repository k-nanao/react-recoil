import React from 'react';
// import { css } from '@emotion/react';
import './App.css';
import TodoList from './components/TodoList';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <div className='container'>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
