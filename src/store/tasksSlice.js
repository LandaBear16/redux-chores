import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: ''
  };
};

const initialState = [createTask('Buy Chewie Treats'), createTask('Study')];

export const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(createTask(action.payload));
    },
    toggle(state, action) {
      const task = state.find((task) => {
        return task.id === action.payload;
      });
      task.completed = !task.completed;
    },
    assignToHuman(state, action) {
      console.log(
        '🚀 ~ file: tasksSlice.js:28 ~ assignToHuman ~ action:',
        action
      );
      const task = state.find((task) => {
        return task.id === action.payload.taskId;
      });
      task.assignedTo = action.payload.humanId;
    }
  }
});

// createAction takes the arguments and creates the payload.
// export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
//   payload: { taskId, completed }
// }));
