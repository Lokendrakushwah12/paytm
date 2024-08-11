import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="dashboard/*" element={<DashboardRoute />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/Register" element={<Register />} /> */}
          {/* <Route path="termsofservice" element={<TermsofService />} /> */}
          {/* <Route path="privacypolicy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
