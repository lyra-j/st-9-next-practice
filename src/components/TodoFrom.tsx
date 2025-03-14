"use client";

import { useAddTodo } from "@/hooks/mutations";
import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const { mutate: addTodo } = useAddTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      // id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      imgPath: "https://picsum.photos/250/250",
      createdAt: Date.now(),
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contents">내용:</label>
        <input
          id="contents"
          name="contents"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="submit-button">
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
