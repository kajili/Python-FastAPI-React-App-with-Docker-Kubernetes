import "./App.css";

import { useEffect, useState } from "react";
import { DogFacts } from "./components/DogFacts";

function App() {
  const [dogFacts, setDogFacts] = useState([]);

  useEffect(() => {
    // getting host from "proxy" in package.json
    fetch("/dogs").then((response) =>
      response.json().then((data) => {
        setDogFacts(data);
      })
    );
  }, []);

  console.log(dogFacts);

  return (
    <div className="App">
      <DogFacts dogFacts={dogFacts} />
    </div>
  );
}

export default App;
