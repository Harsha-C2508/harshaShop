import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Allroutes from './pages/Allroutes';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
