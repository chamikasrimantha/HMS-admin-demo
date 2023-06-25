import './App.css';
import LogInPage from './Pages/LogInPage/LogInPage';
import { Route, Routes } from "react-router-dom";
import AdminMainPage from './Pages/AdminMainPage/AdminMainPage';
import EasyPage from './Pages/EasyPage/EasyPage';
import AppoPage from './Pages/AppoPage/AppoPage';
import BillingPage from './Pages/BillingPage/BillingPage';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/main" element={<AdminMainPage />}/>
      <Route path="/users" element={<EasyPage />}/>
      <Route path="/appointments" element={<AppoPage/>} />
      <Route path="/billing" element={<BillingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
