import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      title: '送信設定',
      isComplete: false,
    },
  ],
});
