import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp"; 
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Sendmoney from "./Pages/Sendmoney";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Sendmoney />} />
      </Routes>
    </Router>
  );
}

export default App;
