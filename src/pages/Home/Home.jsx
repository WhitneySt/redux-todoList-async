import { useSelector } from "react-redux";
import TodoList from "../../components/TodoList/TodoList";
import Error from "../../components/Error/Error";

const Home = () => {
  const error = useSelector((store) => store.todo.error);
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <TodoList />
    </div>
  );
};

export default Home;
