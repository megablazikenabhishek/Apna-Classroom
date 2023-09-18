import SignIn from "./pages/AuthPages/Sign-in/SignIn";
import HomeScreen from "./pages/Home";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherSignUp from "./pages/AuthPages/Sign-up/TeacherSignUp";
import StudentSignUp from "./pages/AuthPages/Sign-up/StudentSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/teacher/registration/:id" element={<TeacherSignUp />} />
        <Route path="/student/registration/:id" element={<StudentSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
