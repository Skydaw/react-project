import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import {Transition} from 'react-transition-group';
import{gsap} from 'gsap';

const routes=[
  {path: '/', name:"Home", Component: Home},
  {path: '/project', name:"Project", Component: Project},
  {path: '/contact', name:"Contact", Component: Contact}
]


function App() {

  return (
    <Router>
    <headers>
      <Navbar/>
    </headers>
        
    <main>
      <section className="container">
        <Transition>
          <Switch>
            {routes.map(({path, Component})=>(
              <Route key={path} path={path} exact >
                {()=>(
                      <>
                        <Component/>
                      </>
                )}
              </Route>
            ))};
          </Switch>
        </Transition>
      </section>
    </main>
    </Router>
  );
}

export default App;
