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
  console.log(memories);

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <h1>Share A Memory</h1>
          <Navbar />
        </header>
        <Route exact path="/">
          <MemoriesList memories={memories} setToggle={setToggle} />
        </Route>
        <Route path="/guide">
          <Guide />
        </Route>
        <Route path="/new">
          <Form />
        </Route>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// function App() {
//   let mapInput = (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!4v1616717878107!6m8!1m7!1sCAoSLEFGMVFpcE4xeG1LdU1jZDRDSDNYNUZGMm9ZVmtONWRmTmZvNDg1QjFCRHh3!2m2!1d64.27211059999999!2d-19.1220108!3f8.87692553816629!4f3.367112082930163!5f0.7820865974627469"
//       width="600"
//       height="450"
//       // style="border:0;"
//       allowfullscreen=""
//       loading="lazy"
//     ></iframe>
//   );

//   <iframe
//     src="https://www.google.com/maps/embed?pb=!4v1616768390484!6m8!1m7!1sCAoSLEFGMVFpcE5ZRDZkNXZFLW1RZ1BBMUt4SGduemdMUlAzTHNpUDlPZXVYcHpt!2m2!1d63.45912569999999!2d-19.3644994!3f259.77!4f6.010000000000005!5f0.7820865974627469"
//     width="600"
//     height="450"
//     style="border:0;"
//     allowfullscreen=""
//     loading="lazy"
//   ></iframe>;
//   // map.props.style = undefined
//   // let embedJSON = JSON.stringify(mapInput.props)

//   // map.toString()
//   // map.split(" ")
//   console.log(mapInput);

//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello
//         {/* <div dangerouslySetInnerHTML={{__html: mapInput}}/> */}
//         {/* {/* {mapInput} */}
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!4v1616716090614!6m8!1m7!1sdH1Abp_b4Lsy-YCmyfdUZw!2m2!1d40.66126359664633!2d-73.96524025010834!3f221.38949245235779!4f2.6738504650120802!5f0.7820865974627469"
//           width="600"
//           height="450"
//           // style="border:0;"
//           allowfullscreen=""
//           loading="lazy"
//         ></iframe> */}
//       </header>
//     </div>
//   );
// }

// export default App;
