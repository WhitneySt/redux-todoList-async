import axios from "axios";
import { URL_API } from "../config";

//1. Obtener todas las tareas

export const getTask = async () => {
  try {
    const { data } = await axios.get(URL_API);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//2. Crear una nueva tarea

export const createTask = async (task) => {
  try {
    const { data } = await axios.post(URL_API, task);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//3. Actualizar una tarea

export const updateTask = async (id, task) => {
  try {
    const url = `${URL_API}/${id}`;
    const { data } = await axios.put(url, task);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//4. Eliminar una tarea

export const deleteTask = async (id) => {
  try {
    const url = `${URL_API}/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.error(error);
    return error;
  }
};
