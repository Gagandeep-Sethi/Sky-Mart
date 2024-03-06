import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App h-screen w-screen">
      <div className='h-[10%] w-full ' ><Header/></div>
      <div className=' w-full  '><Outlet/></div>
    </div>
  );
}

export default App;
