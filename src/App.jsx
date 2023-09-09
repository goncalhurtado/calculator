import { useState } from "react";
import "./App.css";
import "./css/calculator.css";
import "./css/background.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="base">
        <div className="container case">
          <input type="text" className="input" />
          <div className="header">
            <p className="logo">logo</p>
            <p className="header-name">Datamath II</p>
          </div>
          <div className="container keyboard">
            <div className="">
              <input className="btn btn-aux" type="button" value="C" />
              <input className="btn btn-aux" type="button" value="CE" />
              <input className="btn btn-aux" type="button" value="%" />
              <input className="btn btn-aux" type="button" value="÷" />
            </div>
            <div className="">
              <input className="btn" type="button" value="7" />
              <input className="btn" type="button" value="8" />
              <input className="btn" type="button" value="9" />
              <input className="btn btn-aux" type="button" value="x" />
            </div>
            <div>
              <input className="btn" type="button" value="4" />
              <input className="btn" type="button" value="5" />
              <input className="btn" type="button" value="6" />
              <input className="btn btn-aux" type="button" value="-" />
            </div>
            <div>
              <input className="btn" type="button" value="1" />
              <input className="btn" type="button" value="2" />
              <input className="btn" type="button" value="3" />
              <input className="btn btn-aux" type="button" value="+" />
            </div>
            <div>
              <input className="btn btn-0" type="button" value="0" />
              <input className="btn btn-dot" type="button" value="." />
              <input className="btn btn-equal" type="button" value="=" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
