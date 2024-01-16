import { useEffect } from "react";
import "./App.css";
import { on } from "./shared/on";
import { filter } from "./shared/filter";


(async () => {
  for await (const e of filter(on(document.body, "mousedown"), (el: any) => {
    return el.value.screenX > 300;
  })) {
    console.log(e);
  }
})();

function App() {

  return <></>;
}

export default App;
