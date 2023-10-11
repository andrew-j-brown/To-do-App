import { useState } from "react";
import "boxicons";

function App() {
  const [todoList, setTodoList] = useState([
    { important: false, title: "about", content: "nice" },
    { important: true, title: "My really cool note", content: "yeah" },
  ]);
  const [itemTitle, setItemTitle] = useState("");
  const [itemContent, setItemContent] = useState("");
  const [important, setImportant] = useState(false);

  const handleSetItemTitle = (e) => {
    setItemTitle(e.target.value);
  };

  const handleSetItemContent = (e) => {
    setItemContent(e.target.value);
  };

  const handleSetImportant = () => {
    setImportant(!important);
  };

  const handleSetTodoList = () => {
    setTodoList([
      { important: important, title: itemTitle, content: itemContent },
      ...todoList,
    ]);
    setItemTitle("");
    setItemContent("");
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="todo-title">Title</label>
        <input
          type="text"
          id="todo-title"
          value={itemTitle}
          onChange={handleSetItemTitle}
          placeholder="Title"
        />
        <label htmlFor="todo-content">Content</label>
        <input
          type="text"
          id="todo-content"
          value={itemContent}
          onChange={handleSetItemContent}
          placeholder="Description"
        />
        <div className="button-container">
          <button id="priority" onClick={handleSetImportant}>
            {important ? "!" : "..."}
          </button>
          <button id="add-button" onClick={handleSetTodoList}>
            Add Item
          </button>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo.important && <p className="important">!</p>}
              <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
