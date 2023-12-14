import React, { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { DisplayChangeVAlue } from './components/DisplayChangeVAlue';

type ErrorType =  'Inncorrect Value!' | 'PleaseClik' | false

function App() {

  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [error, setError] = useState<ErrorType>(false)

  const [value, setValue] = useState<number>(minValue);

  const chanchValue = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const recetonClickBtn = () => setValue(minValue);

  const disabledInc = value >= maxValue;
  const disabledRecet = value === minValue;


  const changeMaxMinValue = (max: number, min: number) => {
    setMaxValue(max)
    setMinValue(min)
    setValue(min)
  }

  return (
    <div className="App">

      <Display
        recetonClickBtn={recetonClickBtn}
        chanchValue={chanchValue}
        disabledInc={disabledInc}
        disabledRecet={disabledRecet}
        value={value}
        maxValue={maxValue}
        error={error} />

      <DisplayChangeVAlue
        changeMaxMinValue={changeMaxMinValue}
        error={error}
        setEror={setError}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
}

export default App;
