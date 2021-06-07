import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // getting host from "proxy" in package.json
    fetch("/dogs").then((response) => 
      response.json().then((data) => {
        console.log(data);
      })
    );
  }, []);

  return <div className="App"></div>;
}

export default App;
