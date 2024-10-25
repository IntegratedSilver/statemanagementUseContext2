import { useContext} from 'react';
import LoginContext from '../contexts/userContext';

const Login  = () => {
  
const {user,Dispatch} = useContext(LoginContext);

  // Handle login
  const handleLogin = () => {
    Dispatch({type:'LOGIN', username:'Jose!'})
  }
  // Handle logout
  const handleLogout = () => {
    Dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {user ? (
          <div>
            <h2>It is I, {user}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;