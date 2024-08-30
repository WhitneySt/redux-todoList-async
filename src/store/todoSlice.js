import { createAsyncThunk } from "@reduxjs/toolkit";

//1. Crear los thunks con createAsyncThunk

export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos',)


//2. Crear el slice

//3. Exportar las actions (actions creator) y la función reductora