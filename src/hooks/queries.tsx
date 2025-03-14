import { getTodos } from "@/service/serviceApi";
import { Todo } from "@/type";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery<Todo[]>({ queryKey: ["todos"], queryFn: getTodos });
};
