import { Button } from "./Button"
import { useState } from 'react';

type PropsType = {
  changeMaxMinValue: (max: number, min: number) => void
  error: any
  setEror: (er: any) => void
  maxValue: number
  minValue: number
}

export const DisplayChangeVAlue = (props: PropsType) => {

  const [maxValueInput, setMaxValueInput] = useState(props.maxValue);
  const [minValueInput, setMinValueInput] = useState(props.minValue);
  const stopValue = 0

  const onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxCarrent = +e.currentTarget.value
    if (maxCarrent <= minValueInput) {
      props.setEror("Inncorrect Value!")
    } else {
      maxCarrent != props.maxValue ? props.setEror("PleaseClik") : props.setEror(false)
    }
    setMaxValueInput(maxCarrent)
  }

  const onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const startValue = +e.currentTarget.value
    if (startValue < stopValue) {
      props.setEror("Inncorrect Value!")
    } else {
      startValue != props.minValue ? props.setEror("PleaseClik") : props.setEror(false)
    }
    setMinValueInput(startValue)
  }

  const callBAckClickHandler = () => {
    props.changeMaxMinValue(maxValueInput, minValueInput)
    props.setEror(false)
  }

  const isDisabledHAndler = maxValueInput <= minValueInput || minValueInput < stopValue

  const inputMinStyled = props.error === 'Inncorrect Value!' ? 'erorr' : 'erorrtrur'

  return (
    <div className="big-container">
      <div className="container">
        <span> max value:
          <input type='number'
            onChange={onChangeMaxValue}
            value={maxValueInput}
            className={inputMinStyled + ' ' + 'input'} />
        </span>
        <span> start value:
          <input type='number'
            onChange={onChangeStartValue}
            value={minValueInput}
            className={inputMinStyled + ' ' + 'input' }
          />
        </span>
      </div>

      <div className="container">
        <Button name="set" classStyle=""
          callBAckClick={callBAckClickHandler}
          isDisabled={isDisabledHAndler} />
      </div>
    </div>
  )
}