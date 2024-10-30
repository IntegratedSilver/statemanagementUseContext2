import { ReactNode, useReducer } from "react";
import TodoContext from "./contexts/todoContext";
import todoReducer from "./reducers/TodoReducer";


interface Props {
  children: ReactNode;
}
const TodoProvider = ({ children }: Props) => {
  const [todos, Dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todos, Dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;