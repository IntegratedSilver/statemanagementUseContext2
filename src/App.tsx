import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import AuthProvider from "./state-management/Auth/AuthProvider";
import TodoProvider from "./state-management/Todos/TodoProvider";

const App = () => {
  return (
    <>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      <AuthProvider>
        <TodoProvider>
          <MyNavbar />
          <HomePage />
        </TodoProvider>
      </AuthProvider>
    </>
  );
};

export default App;
