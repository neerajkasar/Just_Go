import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import { CaptainSingnup } from "./pages/CaptainSignup";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={< UserSignup />}/>
        <Route path="/captain-signup" element={< CaptainSingnup />}/>
        <Route path="/captain-login" element={< CaptainLogin />}/>
      </Routes>
    </div>
  )
}

export default App;