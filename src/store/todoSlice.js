import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTask, updateTask } from "../services/todoServices";

//1. Crear los thunks con createAsyncThunk

export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const todo = await getTask();
    return todo;
    // try {
    //   const todo = await getTask();
    //   return todo;
    // } catch (error) {
    //   console.error(error);
    //   thunkAPI.rejectWithValue(error.message);
    // }
  }
);

export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodos",
  async ({ taskId, task }) => {
    const updatedTask = await updateTask(taskId, task);
    return updatedTask;
  }
);

//2. Crear el slice

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.todo = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        state.todo = state.todo.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.error = null;
        state.loading = false;
      })
      .addCase(updateTodoAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

//3. Exportar las actions (actions creator) y la función reductora

const todoReducer = todoSlice.reducer;

export default todoReducer;
