import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="btn-group">
            <button className='btn btn-primary btn-sm' onClick={decrement}><i className="bi bi-dash"></i></button>
            <div className="btn btn-dark btn-sm">{count}</div>
            <button className='btn btn-primary btn-sm' onClick={increment}><i className="bi bi-plus"></i></button>
        </div>
    )
}

export default Counter