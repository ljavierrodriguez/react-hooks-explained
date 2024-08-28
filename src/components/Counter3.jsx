import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default: return state
    }
}

const Counter3 = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div className="btn-group">
            <button className='btn btn-primary btn-sm' onClick={() => dispatch({ type: 'DECREMENT'})}><i className="bi bi-dash"></i></button>
            <div className="btn btn-dark btn-sm">{state.count}</div>
            <button className='btn btn-primary btn-sm' onClick={() => dispatch({ type: 'INCREMENT'})}><i className="bi bi-plus"></i></button>
        </div>
    )
}

export default Counter3