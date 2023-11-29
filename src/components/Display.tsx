import { Button } from "./Button"

type DisplayPropsType = {
    value: number
    maxValue: number
    minValue: number
    changeMaxValue: () => void
    changeMinValue: () => void
}

export const Display = (props: DisplayPropsType) => {
    return (

        <div className="big-container">
            <div className="container">
                {props.maxValue}
            </div>
            <div>
                {props.minValue}
            </div>
            <Button name="+value" callBAckClick={props.changeMaxValue} classStyle="d"></Button>
            <Button name="-value" callBAckClick={props.changeMinValue} classStyle="d"></Button>
        </div>
    )
}