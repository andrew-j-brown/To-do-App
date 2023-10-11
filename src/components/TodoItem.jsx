function TodoItem({ todo, index, handleDelete }) {
  return (
    <li>
      {todo.important && <p className="important">!</p>}
      <div>
        <p>{todo.title}</p>
        <p>{todo.content}</p>
      </div>
      <button className="delete-button" onClick={() => handleDelete(index)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
