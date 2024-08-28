import React from 'react'
import AlertMessage from './components/AlertMessage'
import Counter from './components/Counter'
import Timer from './components/Timer'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import LoginForm from './components/LoginForm'

const App = () => {

    return (
        <>
            <div className='text-center fs-3 my-3'>REACT HOOKS EXPLAINED</div>
            {/* Usando Props */}
            <AlertMessage variant={"success"} className="fs-2" dismissible>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </AlertMessage>
            <AlertMessage variant={"danger"} dismissible>
                Alert Message
            </AlertMessage>
            <AlertMessage variant={"primary"} className="my-3" dismissible />
            <h4>useState</h4>
            <Counter /> <br />
            <Counter /> <br />
            <Counter /> <br />
            <h4>useEffect</h4>
            <Timer />
            <h4>useCallback</h4>
            <Counter2 />
            <Counter2 />
            <h4>useReducer</h4>
            <Counter3 />
            <LoginForm />
        </>
    )
}

export default App