import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTodoAsync } from "../../store/todoSlice";

const TodoItem = ({ task = null }) => {
    const dispatch = useDispatch();
    const handleChange = () =>
      dispatch(
        updateTodoAsync({
          taskId: task?.id,
          task: {
            ...task,
            completed: !task?.completed,
          },
        })
      );
  return (
    <label htmlFor={task?.id}>
      <input
        type="checkbox"
        id={task?.id}
        checked={task?.completed}
        onChange={handleChange}
      />
      <span>{task?.description}</span>
    </label>
  );
};

TodoItem.propTypes = {
  task: PropTypes.object,
};

export default TodoItem;
