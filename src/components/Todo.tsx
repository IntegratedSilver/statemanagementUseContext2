import { useContext } from "react"
import TodoContext from "../contexts/todoContext";

interface Todo {
    id: number;
    value:number;
}

const Todo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const [todos,dispatch] = useReducer(todoReducer,[])
    const {Dispatch, todos} = useContext(TodoContext)



    const generateRandomNumber = ():number => {
        return Date.now()
    }

    // Add new todo
  const addTodo = () => {
   Dispatch({type:'ADD', todo: {id:generateRandomNumber(), title:'todo' + generateRandomNumber(),}})
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
   Dispatch({type:"DELETE",todoId: id})
  };

  return (
  <>
   
    
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <button className="btn btn-primary mb-3" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
export default Todo
