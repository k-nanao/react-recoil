import { selector } from 'recoil';
import { todoListState } from './atom';

export const todoListStatusState = selector<number | any>({
  key: 'todoListStatusState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUnCompletedNum = totalNum - totalCompletedNum;
    return { totalNum, totalCompletedNum, totalUnCompletedNum };
  },
});
