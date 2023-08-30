import SignIn from "./pages/AuthPages/Sign-in/SignIn";
import HomeScreen from "./pages/Home";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/AuthPages/Sign-up/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
