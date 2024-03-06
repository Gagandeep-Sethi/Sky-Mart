import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div className="App h-screen w-screen">
      <div className='h-[10%] w-full ' ><Header/></div>
      <div className=' w-full '><Body/></div>
    </div>
  );
}

export default App;
