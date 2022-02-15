import './App.css';
import {Profilephoto} from './components/profile/ProfilePhoto.js';
import Address from './components/profile/Address.js';
import FullName from './components/profile/FullName.js';


function App() {
  return (
    <div className="App">
       <FullName/>
       <Address/>
       <Profilephoto/>
    </div>
  );
}

export default App;
