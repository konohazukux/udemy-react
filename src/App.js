import { useState } from "react";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  // open
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  const onClickText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input type="text" value={text} onClick={onClickText} />

      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
