
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact';
import Ressume from './Components/Pages/Ressume';



function App() {
  return (

    <Router>
   <Navbar/>

      <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/ressume">
          <Ressume />
          </Route>
     
      </Switch>

    </Router>




  );
}

export default App;
