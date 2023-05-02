import logo from './logo.svg';
import './App.css';
import Firstpage from './pages/firstpage/firstpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secondpage from './pages/secondpage/secondpage';
import Thirdpage from './pages/thirdpage/thirdpage';
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='secondpage' element={<Secondpage/>}/>
        <Route path='firstpage' element={<Firstpage/>}/>
        <Route path='thirdpage' element={<Thirdpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
