function TodoInput({
  itemTitle,
  itemContent,
  important,
  handleSetItemTitle,
  handleSetItemContent,
  handleSetImportant,
  handleSetTodoList,
}) {
  return (
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
  );
}

export default TodoInput;
