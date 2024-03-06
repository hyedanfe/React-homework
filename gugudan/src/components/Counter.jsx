import { useState } from "react";
import Numberinput from "./Numberinput";
import Button from "./Button";
import Result from "./Result";

function Counter() {
  const [dan, setDan] = useState();
  const [result, setResult] = useState("");

  const multiple = () => {
    let result = [];
    for (let i = 1; i <= 9; i++) {
      result.push(
        <li key={i}>
          {dan} X {i} = {dan * i}
        </li>
      );
    }
    setResult(result);
  };

  const reset = () => {
    setResult("");
    setDan("");
  };

  return (
    <div id="counter">
      <Numberinput value={dan} setDan={setDan} />
      <Button onClick={multiple}>입력</Button>
      <Button onClick={reset}>초기화</Button>
      <Result result={result} />
    </div>
  );
}

export default Counter;
