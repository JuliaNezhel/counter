import { Button } from "./Button"
import { useState } from 'react';

type PropsType = {
    changeMaxMinValue: (max: number, min: number) => void
    error: boolean
    setEror: (er: boolean) => void
    maxValue: number
    minValue: number
}

export const DisplayChangeVAlue = (props: PropsType) => {

    const [maxValueInput, setMaxValueInput] = useState(5);
    const [minValueInput, setMinValueInput] = useState(0);
    const stopValue = 0

    const onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxCarrent = +e.currentTarget.value
        maxCarrent <= minValueInput ? props.setEror(true) : props.setEror(false)
        setMaxValueInput(maxCarrent)
    }

    const onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const startValue = +e.currentTarget.value
        if (startValue < stopValue) {
            props.setEror(true)

        } else props.setEror(false)
        setMinValueInput(startValue)
    }

    const callBAckClickHandler = () => {
        props.changeMaxMinValue(maxValueInput, minValueInput)
    }

    const isDisabledHAndler = maxValueInput <= minValueInput || minValueInput < stopValue

    const inputMinStyled = props.error ? 'erorr' : 'erorrtrur'

    return (
        <div className="big-container">
            <div className="container">
                <span> max value:
                    <input type='number'
                        onChange={onChangeMaxValue}
                        value={maxValueInput}
                        className={inputMinStyled} />
                </span>
                <span> start value:
                    <input type='number'
                        onChange={onChangeStartValue}
                        value={minValueInput}
                        className={inputMinStyled}
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