import './App.css'
import {
  BrowserRouter, Routes,  Route, Link
} from "react-router-dom";
import UserTable from './components/UserTable'
import User from './components/User';
import NewUser from './components/NewUser';

function App() {
  
  return (
    <BrowserRouter>
    
    <Routes>
    <Route index element={<UserTable/>} />
    <Route path="/send" element={<User/>} />
    <Route path="/new" element={<NewUser/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
