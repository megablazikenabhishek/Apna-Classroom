import './App.css';
import AdminHome from './pages/AdminHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminHome path={0} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
