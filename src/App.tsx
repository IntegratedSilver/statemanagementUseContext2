import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import TodoContext from "./contexts/todoContext"
import UserContext from "./contexts/userContext"
import todoReducer from "./reducers/TodoReducer"
import authReducer from "./reducers/authReducer"






const App = () => {

  const [todos,dispatch] = useReducer(todoReducer,[])

  const [user, loginDispatch] = useReducer(authReducer, '');


  return (
  <>


  
<TodoContext.Provider value = {{todos, dispatch}}>
<UserContext.Provider value={{user, Dispatch: loginDispatch}}>
  <MyNavbar/>
  <HomePage/>
  </UserContext.Provider>
</TodoContext.Provider>
  </>
  )
}

export default App