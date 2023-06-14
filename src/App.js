import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/pages/layout/Container";
import Navbar from "./components/pages/layout/Navbar";
import Footer from "./components/pages/layout/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Container customClass="min-height">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/company">
              <Company />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/newproject">
              <NewProject />
            </Route>
          </Container>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
