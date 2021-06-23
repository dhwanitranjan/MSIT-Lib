import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home'
import Placements from './Components/Body/Placements'
import Feedback from './Components/Form/Feedback'
import Contact from './Components/Form/Contact'
import Login from './Components/Body/Login'
import Dashboard from './Components/Loggedin/Dashboard'
import Settings from './Components/Sidebar/Settings'
import Itw from './Components/Vidlib/ITW'
import CSPP from './Components/Vidlib/CSPP'
import IDS from './Components/Vidlib/IDS'
import PSC from './Components/Vidlib/PSC'
import ADS from './Components/Vidlib/ADS'
import CNF from './Components/Vidlib/CNF'
import DBMS from './Components/Vidlib/DBMS'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-12 col-sm-12">
                <Navbar />
              </div>
              <div className="col-12 col-sm-12 mar">
                <Home />
              </div>
            </div>
          </Route>

          <Route path="/Placements">
            <div className="row">
              <div className="col-12 col-sm-12">
                <Navbar />
              </div>
              <div className="col-12 col-sm-12 mar">
                <Placements />
              </div>
            </div>
          </Route>


          <Route path="/Login">
          <div className="row">
              <div className="col-12 col-sm-12">
                <Navbar />
              </div>
              <div className="col-12 col-sm-12">
                <Login />
              </div>
            </div>
          </Route>
          
          <div className="row">
            <Route path="/Explore">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <Dashboard />
              </div>
            </Route>

            <Route path="/Feedback">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <Feedback />
              </div>
            </Route>

            <Route path="/Settings">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <Settings />
              </div>
            </Route>

            <Route path="/itw">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <Itw />
              </div>
            </Route>

            <Route path="/cspp">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <CSPP />
              </div>
            </Route>

            <Route path="/ids">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <IDS />
              </div>
            </Route>

            <Route path="/psc">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <PSC />
              </div>
            </Route>

            <Route path="/ads">
              <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <ADS />
              </div>
            </Route>

            <Route path="/cnf">
            <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <CNF />
              </div>
            </Route>

            <Route path="/dbms">
            <div className="col-12 col-sm-12">
                <Navbar2 />
              </div>
              <div className="col-12 col-sm-2 mar">
                <Sidebar />
              </div>
              <div className="col-12 col-sm-10 mar">
                <DBMS />
              </div>
            </Route>
          </div>
        </Switch>

        <div className="row">
          <div className="col-12 col-sm-12">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;