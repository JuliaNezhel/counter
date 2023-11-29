import { Button } from "./Button"

type DisplayRestPropsType = {
    value: number
    maxValue: number
    recetonClickBtn: () => void
    disabledRecet: boolean
    chanchValue: () => void
    disabledInc: boolean
}

export const DisplayRest: React.FC<DisplayRestPropsType> = ({
    value,
    maxValue,
    recetonClickBtn,
    disabledRecet,
    chanchValue,
    disabledInc
}) => {
    console.log('rest' + value)
    return (

        
<div className="big-container">
    <div  className="container">
        <p className={value === maxValue ? 'value-reset' : 'value'} >
                {value}
            </p>
            <Button
                name="recet"
                classStyle="buttpn-recet"
                callBAckClick={recetonClickBtn}
                isDisabled={disabledRecet}
            />
            <Button
                name="inc"
                classStyle="buttpn-rest"
                callBAckClick={chanchValue}
                isDisabled={disabledInc}
            />
        </div>
</div>
            
    )
}