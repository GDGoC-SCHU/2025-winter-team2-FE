import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NavBar from "./layout/Navbar";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import TripPlanner from "./routes/TripPlanner";
import { AuthProvider } from "./contexts/AuthContext"; // 로그인 상태 관리 컨텍스트 추가
import RecommendedTrip from "./routes/RecommendedTrip";
function App() {
  return (
    <Router>
      <AuthProvider> {/* Router 내부에 AuthProvider 유지 */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/recommended" element={<RecommendedTrip/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
