import { useGetTodos } from "@/hooks/queries";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isPending, error } = useGetTodos();

  if (isPending) {
    return (
      <div style={{ fontSize: 36 }}>
        <p>로딩중...</p>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }
  return (
    <>
      <ul style={{ listStyle: "none", width: 250 }}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
