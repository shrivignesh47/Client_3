import './App.css';
import Homepage from './Component/Homepage';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'swiper/css';
import Updates from './Component/updates';


function App() {
  return (
    <div className="App">
    <Updates/>
      <Homepage/> 
    </div>
  );
}

export default App;
