import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/page/users/HomePage";
import LoginUser from "./components/page/users/LoginUser";
import RegisterUser from "./components/page/users/RegisterUser";

function App() {
  const isLoggedIn = !!localStorage.getItem("users");

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            isLoggedIn ? <HomePage /> : <Navigate to='/login-user' replace />
          }
        />
        <Route
          path='/login-user'
          element={!isLoggedIn ? <LoginUser /> : <HomePage />}
        />
        <Route path='/register-user' element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
