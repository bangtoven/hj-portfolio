import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import WelcomePage from "./components/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/">HJ Lim</Link>
          </h1>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact={true} path="/welcome">
              <WelcomePage />
            </Route>
            <Route path="/">
              <Navigation />
            </Route>
          </Switch>
        </main>
        <footer>
          <a href="">Go back</a>
          <div>
            <p>
              Sign up to our mailing list to receive updates on exhibitions and
              new work
            </p>
            <form>
              <label htmlFor="email-input">Email Address</label>
              <input id="email-input" placeholder="Enter email" />
              <button>Submit</button>
            </form>
          </div>
          <div>
            <p>copyright things</p>
            <img src="https://picsum.photos/40" />
            <img src="https://picsum.photos/40" />
            <img src="https://picsum.photos/40" />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
