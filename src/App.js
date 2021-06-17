import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact"
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import InstaIcon from "./components/InstaIcon";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <InstaIcon />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        {/* <Route component={Contact} path="/contact" /> */}
        <Route component={Gallery} path="/gallery" />
        <Route component={Shop} path="/shop" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
