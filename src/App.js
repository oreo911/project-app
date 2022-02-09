import "./App.css";
import JumbotronComponents from "./components/JumbotronComponents";
import NavbarComponent from "./components/NavbarComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import { Redirect, Route, BrowserRouter } from "react-router-dom";
import Book from "./components/Book";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Route path="/" exact component={Jumbo} />
        <Route path="/book" exact component={Book} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
