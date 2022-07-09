import { useContext } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { ThemeContext } from './context/ThemeContext';
import Allroutes from './pages/Allroutes';
function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
     <Navbar/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
