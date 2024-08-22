import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import SignUp from "./Pages/SignUp";
// import SignIn from "./Pages/SignIn";
// import Dashboard from "./Pages/Dashboard";
// import Sendmoney from "./Pages/Sendmoney";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/send" element={<Sendmoney />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
