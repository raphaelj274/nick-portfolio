import { Home } from './pages/Home';
import { Entry } from './pages/Entry';
import { BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { Contact } from './pages/Contact';
import { works } from './services/works';
import { Works } from './pages/Works';
import { writings } from './services/works';
import { Writings } from './pages/Writing';
import { Project } from './pages/Project';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/home' element={<Home works={works}/>}/>
        <Route path='/works' element={<Works works={works}/>}/>
        <Route path='/writing' element={<Writings writings={writings}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project/:id' element={<Project works={works}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
