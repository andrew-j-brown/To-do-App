import { useState } from "react";
import "boxicons";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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
      <TodoInput
        itemTitle={itemTitle}
        itemContent={itemContent}
        important={important}
        handleSetItemTitle={handleSetItemTitle}
        handleSetItemContent={handleSetItemContent}
        handleSetImportant={handleSetImportant}
        handleSetTodoList={handleSetTodoList}
      />
      <hr />
      <TodoList todoList={todoList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
