import TodoItem from "./TodoItem";

function TodoList({ todoList, handleDelete }) {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
