import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Start";
import { CaptainSingnup } from "./pages/CaptainSignup";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import { useContext } from "react";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import { UserLogout } from "./UserLogout";
import { UserDataContext } from "./context/UserContext";

const App = () => {
  const dat = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={< UserSignup />}/>
        <Route path="/captain-signup" element={< CaptainSingnup />}/>
        <Route path="/captain-login" element={< CaptainLogin />}/>
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home/> 
          </UserProtectedWrapper>
        }></Route>
        <Route path="/user/logout" element={
        <UserProtectedWrapper>
            <UserLogout/>
        </UserProtectedWrapper>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App;