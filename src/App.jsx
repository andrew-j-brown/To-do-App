import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(["item 1", "item2"]);
  const [newTodo, setNewTodo] = useState("");

  const handleSetNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSetTodoList = () => {
    setTodoList([newTodo, ...todoList]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <>
      <div>
        <label htmlFor="todo-form">New to-do</label>
        <input
          type="text"
          id="todo-form"
          value={newTodo}
          onChange={handleSetNewTodo}
        />
        <button onClick={handleSetTodoList}>Add Item</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
