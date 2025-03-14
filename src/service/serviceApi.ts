import { Todo } from "@/type";

export const addTodo = async (newTodo: Todo) => {
  const response = await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error(`Failed to post todo`);
  }
  return await response.json();
};

export const getTodos = async () => {
  const response = await fetch(`http://localhost:4000/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return await response.json();
};
