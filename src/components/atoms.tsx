import { atom, selector } from "recoil";

export const minState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minute = get(minState);
    return minute / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minState, minutes);
  },
});
