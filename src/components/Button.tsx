type ButtonPropsTupe = {
    name: string
    callBAckClick: () => void
    isDisabled?: boolean
    classStyle: string
}



export const Button = (props: ButtonPropsTupe) => {

    return (
        <button
            className={props.classStyle}
            onClick={props.callBAckClick}
            disabled={props.isDisabled} >
            {props.name}
        </button>
    )
}