import { useEffect } from "react";
import { simulateScroll } from "./carousel.ts";

function App() {
  useEffect(() => {
    const result0 = simulateScroll(["A", "B", "C"], 0);
    const result3 = simulateScroll(["A", "B", "C"], 3);
    const result4 = simulateScroll(["A", "B", "C"], 4);
    const result5 = simulateScroll(["A", "B", "C"], 5);
    const result6 = simulateScroll(["A", "B", "C"], 6);
    console.log(0, result0);
    console.log(3, result3);
    console.log(4, result4);
    console.log(5, result5);
    console.log(6, result6);

    const resultD0 = simulateScroll(["A", "B", "C", "D"], 0);
    const resultD1 = simulateScroll(["A", "B", "C", "D"], 1);
    const resultD2 = simulateScroll(["A", "B", "C", "D"], 2);
    const resultD3 = simulateScroll(["A", "B", "C", "D"], 3);
    const resultD4 = simulateScroll(["A", "B", "C", "D"], 4);
    const resultD5 = simulateScroll(["A", "B", "C", "D"], 5);
    const resultD6 = simulateScroll(["A", "B", "C", "D"], 6);
    const resultD7 = simulateScroll(["A", "B", "C", "D"], 7);
    const resultD8 = simulateScroll(["A", "B", "C", "D"], 8);
    console.log("D0", resultD0);
    console.log("D1", resultD1);
    console.log("D2", resultD2);
    console.log("D3", resultD3);
    console.log("D4", resultD4);
    console.log("D5", resultD5);
    console.log("D6", resultD6);
    console.log("D7", resultD7);
    console.log("D8", resultD8);
  }, []);

  return <div>testo-code-challenge</div>;
}

export default App;
