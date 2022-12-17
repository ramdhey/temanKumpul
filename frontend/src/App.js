import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/Login/Login';
import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilPage/ProfilePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/profile/:userId" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
