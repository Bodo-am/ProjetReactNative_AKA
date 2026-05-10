
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',

  initialState: {
    list: []
  },

  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload
      });
    },

    removeTask: (state, action) => {
      state.list = state.list.filter(
        task => task.id !== action.payload
      );
    }
  }
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
