import React, {useEffect, useState} from "react";
import style from "./ChangePageButtons.module.css"
import cn from "classnames"

const Paginator = ({totalCount, currentPage, portionSize, ...props}) => {

    const [leftPosition, setLeftPosition] = useState(1)
    const [rightPosition, setRightPosition] = useState(portionSize + leftPosition)
    const [count_portion, setCountPortion] = useState([])

    useEffect(() => {
        if (count_portion.length !== totalCount / portionSize) {
            let count = []
            for (let i = 1; i <= Math.ceil(totalCount / portionSize); i++) {
                count.push(i)
            }
            setCountPortion(count)
        }

    }, [totalCount, portionSize, count_portion.length])


    const showButtons = count_portion
        .filter(value => (value >= leftPosition && value <= rightPosition))
        .map(value => <button key={value}
                              className={cn(style.secondButton, value === currentPage ? style.active : "")}
                              onClick={props.OnClickButton}>{value}</button>)


    const changeNumbers = (operator) => {
        if (operator === "+") {
            setLeftPosition(rightPosition + 1)
            setRightPosition(portionSize + rightPosition)
        } else if (operator === "-") {
            setLeftPosition(leftPosition - portionSize)
            setRightPosition(rightPosition - portionSize)
        }
    }

    const x = () =>{
        setLeftPosition(currentPage)
        setRightPosition(currentPage + portionSize)
    }

    return (
        <div>
            {leftPosition > 1 && <button onClick={() => changeNumbers("-")}>Prev</button>}
            {showButtons}
            {rightPosition < count_portion.length && <button onClick={() => changeNumbers("+")}>Next</button>}
            <div onClick={x}>Current page: {currentPage}</div>
        </div>

    )
}

export default Paginator
