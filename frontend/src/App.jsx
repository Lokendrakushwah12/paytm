import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound404 from "./Pages/NotFound404";
import Transfer from "./Pages/Transfer";
import Dash from "./Pages/Dash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
