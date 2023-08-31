import { Outlet } from 'react-router-dom';
import './App.css';
import Common from './components/Common/Common';

function App() {

  return (
    <>
      <Common></Common>
      <Outlet></Outlet>
    </>
  )
}

export default App;
