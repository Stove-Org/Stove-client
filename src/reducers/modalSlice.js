import { createSlice } from "@reduxjs/toolkit";

const name = "ModalSlice";
const initialState = {
  isModalOpen: false,
};

const userSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isModalOpen = true;
    },
    setCloseModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setOpenModal, setCloseModal } = userSlice.actions;
export default userSlice;
