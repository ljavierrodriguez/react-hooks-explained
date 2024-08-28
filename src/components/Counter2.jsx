import React, { useState, useCallback, useEffect } from 'react'


const ButtonsConter = ({ increment, decrement, count }) => {
    return (
        <div className="btn-group">
            <button className='btn btn-primary btn-sm' onClick={decrement}><i className="bi bi-dash"></i></button>
            <div className="btn btn-dark btn-sm">{count}</div>
            <button className='btn btn-primary btn-sm' onClick={increment}><i className="bi bi-plus"></i></button>
        </div>
    )
}

const Counter2 = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    })

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1)
    })

    useEffect(() => {
        console.log("Componente ha sido actualizado")
    }, [count])

    return (
        <ButtonsConter increment={increment} decrement={decrement} count={count} />
    )
}

export default Counter2