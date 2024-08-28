import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload}
        case 'username':
            return { ...state, username: action.payload}
        case 'password':
            return { ...state, password: action.payload}
        default:
            return state
    }
}

const LoginForm = () => {

    const [state, dispatch] = useReducer(reducer, { username: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(state)
    } 

    return (
        <>
            <div>LoginForm</div>
            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="email"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder='Username'
                        value={state.username}
                        onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder='Password'
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                    />
                </div>
                <button className="btn btn-primary btn-sm w-100">Login</button>
            </form>
        </>
    )
}

export default LoginForm