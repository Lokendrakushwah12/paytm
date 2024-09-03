import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Send from "./Pages/Send";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/sendmoney" element={<Send />} />
      </Routes>
    </Router>
  );
}

export default App;
