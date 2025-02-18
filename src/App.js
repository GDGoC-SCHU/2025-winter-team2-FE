import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NavBar from "./layout/Navbar"; // 
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import TripPlanner from "./routes/TripPlanner";
import { AuthProvider } from "./contexts/AuthContext"; // 🔹 로그인 상태 관리
import RecommendedTrip from "./routes/RecommendedTrip";
import MyProfile from "./routes/MyProfile";

function App() {
  return (
    <AuthProvider> {/* 🔹 AuthProvider는 Router 바깥에서 상태 유지 */}
      <Router>
        <NavBar /> {/* 🔹 로그인 상태 반영을 위해 Router 안에서 배치 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/recommended" element={<RecommendedTrip />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
