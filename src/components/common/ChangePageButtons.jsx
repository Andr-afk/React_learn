import React, {useEffect, useState} from "react";
import style from "./ChangePageButtons.module.css"

const Paginator = ({totalCount, ...props}) => {

    const [leftPosition, setLeftPosition] = useState(props.currentPage)
    const [rightPosition, setRightPosition] = useState(props.portionSize + leftPosition)
    const [count_portion, setCountPortion] = useState([])

    useEffect(() => {
        if (count_portion.length !== totalCount / props.portionSize) {
            let count = []
            for (let i = 1; i <= Math.ceil(totalCount / props.portionSize); i++) {
                count.push(i)
            }
            setCountPortion(count)
        }

    }, [totalCount, props.portionSize])


    const showButtons = count_portion
        .filter(value => (value >= leftPosition && value <= rightPosition))
        .map(value => <button key={value} className={style.secondButton} onClick={props.OnClickButton}>{value}</button>)


    const changeNumbers = (operator) => {
        if (operator === "+") {
            setLeftPosition(rightPosition + 1)
            setRightPosition(props.portionSize + rightPosition)
        } else if (operator === "-") {
            setLeftPosition(leftPosition - props.portionSize)
            setRightPosition(rightPosition - props.portionSize)
        }

    }

    return (
        <div>
            {leftPosition > 1 && <button onClick={() => changeNumbers("-")}>Prev</button>}
            {showButtons}
            {rightPosition < count_portion.length && <button onClick={() => changeNumbers("+")}>Next</button>}
            <div>Current page: {props.currentPage}</div>
        </div>

    )
}

export default Paginator
