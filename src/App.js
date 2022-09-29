import { useState } from "react";
import "./App.css";
import BackCard from "./Components/BackCard";
import Form from "./Components/Form";
import FrontCard from "./Components/FrontCard";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cvc, setCVC] = useState("");

  const props = {
    name,
    number,
    year,
    month,
    cvc,
    
  };

  const setters = {
    setName,
    setNumber,
    setYear,
    setMonth,
    setCVC,
    };

  return (
    <div className="App">
      <div className="background"></div>
      <FrontCard number={number} name={name} year={year} month={month} />
      <BackCard cvc={cvc} />
      <Form setters={setters} propsInfo={props}/>
      
  
    </div>
  );
}

export default App;
