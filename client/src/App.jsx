import SignIn from "./pages/AuthPages/Sign-in/SignIn";
import TeacherSignIn from "./pages/AuthPages/Sign-in/TeacherSignIn";
import HomeScreen from "./pages/Home";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherSignUp from "./pages/AuthPages/Sign-up/TeacherSignUp";
import StudentSignUp from "./pages/AuthPages/Sign-up/StudentSignUp";
// import SignUp from "./pages/AuthPages/Sign-up/SignUp";
import "./App.css";
import Calls from "./components/calls/index";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/room" element={<Room />} />
        <Route path="/student/login" element={<SignIn />} />
        <Route path="/teacher/login" element={<TeacherSignIn />} />
        <Route path="/teacher/registration/:id" element={<TeacherSignUp />} />
        <Route path="/student/registration/:id" element={<StudentSignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/home" element={<Calls />} />
        <Route path="/activity" element={<HomeScreen />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
