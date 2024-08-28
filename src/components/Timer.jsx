import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {

        let idInterval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }

    }, [])

    return (
        <div>Seconds: {seconds}</div>
    )
}

export default Timer