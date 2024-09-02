import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { useEffect } from "react";
import { fetchTodosAsync } from "../../store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todo.todo);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);
    
  return (
    <section>
      {todo?.map((item) => (
        <TodoItem key={item.id} task={item} />
      ))}
    </section>
  );
};

export default TodoList;
