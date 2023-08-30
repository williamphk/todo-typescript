import { useState } from "react";

const TodoList: React.FC = () => {
  const [selectedTodoId, setSelectedTodoId] = useState<number>(0);

  const handleTodoClick = (id: number) => {
    setSelectedTodoId(id);
  };

  const todos: string[] = ["Buy groceries", "Clean the house", "Walk the dog"];
  return (
    <div>
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos && todos.length === 0 ? (
          <div className="list-group-item">No todos, yay!</div>
        ) : (
          todos.map((todo, index) => {
            return (
              <button
                key={index}
                className={`list-group-item ${
                  selectedTodoId === index ? "active" : ""
                }`}
                onClick={() => handleTodoClick(index)}
              >
                {todo}
              </button>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default TodoList;
