import React, { useState } from "react";
import "./App.css";
import { DisplayRest } from "./components/DisplayRest";
import { DisplayChangeVAlue } from './components/DisplayChangeVAlue';
import { Display } from "./components/Display";


const recetonClick = (startValue: number, setValueInintial: (num: number) => void) => setValueInintial(startValue);

function App() {
  // const [tasks, setTasks] = useState([
  //   { id: crypto.randomUUID(), title: "hello", isDone: false },
  // ]);

  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [error, setError] = useState<boolean>(false)

  const [value, setValue] = useState<number>(minValue);

  // React.useEffect(() => {
  //   let valueLocalstore = localStorage.getItem('valueeee')
  //   if (valueLocalstore) {
  //     let newValueLoczlStore = JSON.parse(valueLocalstore)
  //     setValue(newValueLoczlStore)
  //   }
  // }, [])

  // React.useEffect(() => {
  //   localStorage.setItem('valueeee', JSON.stringify(value))
  // }, [value])


  const chanchValue = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };


  const recetonClickBtn = () => setValue(minValue);

  const disabledInc = value >= maxValue;
  const disabledRecet = value === minValue;

  const setLocalStoreHendler = () => {
    localStorage.setItem('value+1', JSON.stringify(value + 1))
  }

  const clearLocalStoreHendler = () => {
    localStorage.clear()
  }

  const removeLocalStoreHendler = () => {
    localStorage.removeItem('value+1')
  }

  const getLocalStoreHendler = () => {
    let valueLocalstore = localStorage.getItem('valueeee')
    if (valueLocalstore) {
      let newValueLoczlStore = JSON.parse(valueLocalstore)
      setValue(newValueLoczlStore)
    }
  }

  const changeMaxValueClisar = (setMaxValue: (num: number) => void, maxValue: number) => {
    setMaxValue(maxValue + 1)
  }

  const changeMaxValue = () => {
    if (maxValue >= minValue) {
      changeMaxValueClisar(setMaxValue, maxValue)
    }
  }
  const changeMinValue = () => {
    if (minValue < maxValue) {
      setMinValue(minValue + 1)
    }
  }
  const changeMaxMinValue = (max: number, min: number) => {
    setMaxValue(max)
    setMinValue(min)
    recetonClick(min, setValue)
  }

  return (
    <div className="App">
      <Display value={value}
        maxValue={maxValue}
        minValue={minValue}
        changeMaxValue={changeMaxValue}
        changeMinValue={changeMinValue} />

      <DisplayRest
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

      {/* <div className="container">

        <button onClick={setLocalStoreHendler}>set</button>
        <button onClick={getLocalStoreHendler}>get</button>
        <button onClick={clearLocalStoreHendler}>clear</button>
        <button onClick={removeLocalStoreHendler}>remove</button>
        <Button
          name="inc"
          classStyle="buttpn-rest"
          callBAckClick={chanchValue}
          isDisabled={disabledInc}
        />
        <Button
          name="recet"
          classStyle="buttpn-recet"
          callBAckClick={recetonClickBtn}
          isDisabled={disabledRecet}
        />
      </div> */}
      {/* <div className="container">
        <input type="checkbox" onChange={() => { }} />
      </div> */}
    </div>
  );
}

export default App;
