import { Homepage } from './components/Homepage';
import { Entry } from './components/Entry';
import { BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { Contact } from './components/Contact';

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
