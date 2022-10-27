import { atom } from "recoil";

const initData = {
  email: "",
  nickname: null,
  role: "USER",
};

export const myProfileAtom = atom({
  key: "myProfileAtom",
  default: initData,
});

export const findUser = atom({
  key: "findUser",
  default: undefined,
});
