import { atom } from 'recoil';
import { DATA } from '../types/DataType';

export const todoListState = atom<Array<DATA>>({
  key: 'todoListState',
  default: [
    {
      id: 0,
      title: '送信設定',
      isComplete: false,
    },
  ],
});
