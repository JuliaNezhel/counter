import { Button } from "./Button"

type DisplayRestPropsType = {
  value: number
  maxValue: number
  recetonClickBtn: () => void
  disabledRecet: boolean
  chanchValue: () => void
  disabledInc: boolean
  error: any
}

export const Display: React.FC<DisplayRestPropsType> = ({
  value,
  maxValue,
  recetonClickBtn,
  disabledRecet,
  chanchValue,
  disabledInc,
  error
}) => {
  console.log(error)

  const inncorrectValue = <span>{error}</span>

  return (


    <div className="big-container">
      <div className="container">
        <p className={value === maxValue ? 'value-reset' : 'value'} >
          {(error === "Inncorrect Value!" || error === "PleaseClik") ? inncorrectValue : value}
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