import { useState } from "react";
import "./App.css";

const Square = ({ text, selected, index, setSelected }) => (
  <div
    className={selected[index] ? "Square-selected" : "Square"}
    onClick={() => {
      const newArr = [...selected];
      newArr.splice(index, 1, !selected[index]);
      setSelected(newArr);

      console.log(selected.splice(index, 1, !selected));
    }}
  >
    {text}
  </div>
);

const input = [
  "Tucker gets annoyed ",
  "Jonny wants secrets",
  "Emma dances",
  "Poop mention",
  "Fart joke",
  "Tucker says “ok that’s a good one” ",
  "B & E kiss",
  "Jonny wants 2 fight",
  "J & E squint",
  "Tucker gets annoyed (again)",
  "Someone says CHUG",
  "B & J get lost in a bit",
  "Jonny asks 4 a top 10 list",
  "Jonny wants secrets",
  "Butt mention",
  "B recognizes an obscure song",
  "Someone does an accent",
  "Jonny uses a peeing euphemism",
  "Someone makes a joke about the libs",
  "Jonny's slut era is mentioned",
  "Ben stares aimlessly outside",
  "Emma orders fruity drink",
  "The gang rides a bus",
  "Ben tries a new beer",
  "Someone has their 10th drink",
];

function App() {
  const [selected, setSelected] = useState(new Array(25).fill(false));
  console.log(selected);
  return (
    <div className="App">
      <div className="wrapper">
        {input.map((text, index) => (
          <Square
            text={text}
            setSelected={setSelected}
            index={index}
            selected={selected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
