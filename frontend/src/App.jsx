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
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sendmoney" element={<Sendmoney />} />
      </Routes>
    </Router>
  );
}

export default App;
