import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import MemoriesList from "./components/MemoriesList";
import Form from "./components/Form";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";

function App() {
  const [memories, setMemories] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getMemories();
  }, [toggle]);

  async function getMemories() {
    let response = await axios.get(baseURL, config);

    setMemories(response.data.records);
  }
  // console.log(memories);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Route exact path="/">
        <MemoriesList
          memories={memories}
          setToggle={setToggle}
        />
      </Route>
      <Route path="/guide">
        <Guide />
      </Route>
      <Route path="/new">
        <Form
          setToggle={setToggle}
        />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
