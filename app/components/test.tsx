import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState([
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ]);


  console.log(people)

  const listItems = people.map((person, index) => {
    return (
      <div key={index}>
        <li>{person}</li>
        <button
          onClick={() => {
            console.log("hello", person);
            let temp = [...people];
            const index = people.indexOf(person);
            temp.splice(index,1)
            setPeople(temp)
          }}
        >
          remove
        </button>
      </div>
    );
  });
  return <ul>{listItems}</ul>;
}

export default App;
