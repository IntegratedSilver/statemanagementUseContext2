import { Dispatch } from "react";
import React from "react";
import { Todo, TodoAction } from "./TodoProvider";

interface TodoContextType {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>
}

const TodoContext = React.createContext<TodoContextType>({} as TodoContextType)

export default TodoContext;