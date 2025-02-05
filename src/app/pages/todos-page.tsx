import { useState, useEffect } from "react";
import { TodoForm } from "../components/todo-form";
import { TodoList } from "../components/todo-list";
import { ITodo } from "../components/types";
import { Modal } from "../components/modal";

export const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToRemove, setTodoToRemove] = useState<number | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodoToRemove(id);
    setIsModalOpen(true);
  };

  const confirmRemove = () => {
    if (todoToRemove !== null) {
      setTodos((prev) => prev.filter((todo) => todo.id !== todoToRemove));
      setIsModalOpen(false);
      setTodoToRemove(null);
    }
  };

  const cancelRemove = () => {
    setIsModalOpen(false);
    setTodoToRemove(null);
  };

  return (
    <div className="todos-page">
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
      {isModalOpen && (
        <Modal
          message="Are you sure you want to remove this item?"
          onCancel={cancelRemove}
          onConfirm={confirmRemove}
        />
      )}
    </div>
  );
};
