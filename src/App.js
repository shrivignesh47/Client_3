import './App.css';
import Homepage from './Component/Homepage';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'swiper/css';
import Updates from './Component/updates';

import VisionMission from './Component/VisonMisson';
import Menu from './Component/Menu';
import Gallery from './Component/Gallery';
import { InfiniteMovingCardsDemo } from './Component/Testimonal';
import Location from './Component/Location';
import { InstagramEmbed } from './Component/InstagramEmbed';

function App() {
  return (
    <div className="App">
    <Updates/>
      <Homepage/> 
    </div>
  );
}

export default App;
