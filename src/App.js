import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/pages";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
  return (
    <div className="App">
      <header className="App-header">
        <Router>{routes}</Router>
      </header>
    </div>
  );
}

export default App;
