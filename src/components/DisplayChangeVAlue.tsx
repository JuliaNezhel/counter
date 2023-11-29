import { Button } from "./Button"
import { useState } from 'react';

type PropsType = {
    changeMaxMinValue: (max: number, min: number) => void
}

export const DisplayChangeVAlue = (props: PropsType) => {

    const [maxValueInput, setMaxValueInput] = useState(5);
    const [minValueInput, setMinValueInput] = useState(0);

    const onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        setMaxValueInput(maxValue)
    }

    const onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const startValue = +e.currentTarget.value
        setMinValueInput(startValue)
    }

    const callBAckClickHandler = () => {
        props.changeMaxMinValue(maxValueInput, minValueInput)
    }

    const isDisabledHAndler = maxValueInput <= minValueInput || minValueInput < 0


    return (
        <div className="big-container">
            <div className="container">
                <span> max value:
                    <input type='number' onChange={onChangeMaxValue} value={maxValueInput} />
                </span>
                <span> start value:
                    <input type='number' onChange={onChangeStartValue} value={minValueInput} />
                </span>
            </div>
            <div className="container">
                <Button name="set" classStyle="" callBAckClick={callBAckClickHandler} isDisabled={isDisabledHAndler} />
            </div>
        </div>
    )
}