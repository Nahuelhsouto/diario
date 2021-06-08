import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Categories, Home, Weather } from "./pages/mobile";
import { Top } from "./components";
function App() {
  return (
    <div className="App">
      <MediaQuery minWidth="801px">
        <h1> chau</h1>
      </MediaQuery>

      {/*Mobile*/}
      <MediaQuery maxWidth="800px">
        <Router>
          <Top />
          <Switch>
            <Route path={"./categories"} component={Categories} />
            <Route path={"./weather"} component={Weather} />
            <Route path={"./home"} component={Home} />
          </Switch>
        </Router>
      </MediaQuery>
    </div>
  );
}

export default App;
