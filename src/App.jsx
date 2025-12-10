import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Information from './components/Information/Information';
import MyPower from './components/MyPower/MyPower';
import CalcYourPower from './components/CalcYourPower/CalcYourPower';
import QA from './components/QA/QA';

function App() {
  return (
    <>

      <Navbar />
        <Routes>
          <Route path='/' element={<Information />} />
          <Route path='/MyPower' element={<MyPower />} />
          <Route path='/CalculateYourPower' element={<CalcYourPower />} />
          <Route path='/Q&A' element={<QA />} />
        </Routes>
    </>
  )
}

export default App
