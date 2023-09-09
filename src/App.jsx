import { useState } from "react";
import "./App.css";
import "./css/calculator.css";
import "./css/background.css";
import {
  btnNumber,
  btnC,
  btnCE,
  btnOperation,
  equal,
} from "./helpers/calculator";

function App() {
  let [value, setValue] = useState("");

  return (
    <>
      <div className="base">
        <div className="container case">
          <input type="text" className="input" defaultValue={value} />
          <div className="header">
            <p className="logo">logo</p>
            <p className="header-name">Datamath II</p>
          </div>
          <div className="container keyboard">
            <div className="">
              <input
                className="btn btn-aux"
                type="button"
                defaultValue="C"
                onClick={(e) => btnC(e, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                value="CE"
                onClick={(e) => btnCE(e, value, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                value="%"
                onClick={(e) => btnOperation(e, value, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                value="÷"
                onClick={(e) => btnOperation(e, value, setValue)}
              />
            </div>
            <div className="">
              <input
                className="btn"
                type="button"
                defaultValue="7"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="8"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="9"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                value="X"
                onClick={(e) => btnOperation(e, value, setValue)}
              />
            </div>
            <div>
              <input
                className="btn"
                type="button"
                defaultValue="4"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="5"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="6"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                value="-"
                onClick={(e) => btnOperation(e, value, setValue)}
              />
            </div>
            <div>
              <input
                className="btn"
                type="button"
                defaultValue="1"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="2"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn"
                type="button"
                defaultValue="3"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input
                className="btn btn-aux"
                type="button"
                defaultValue="+"
                onClick={(e) => btnOperation(e, value, setValue)}
              />
            </div>
            <div>
              <input
                className="btn btn-0"
                type="button"
                defaultValue="0"
                onClick={(e) => btnNumber(e, value, setValue)}
              />
              <input className="btn btn-dot" type="button" value="." />
              <input
                className="btn btn-equal"
                type="button"
                defaultValue={"="}
                onClick={(e) => equal(e, value, setValue)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
