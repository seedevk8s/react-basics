import { useState } from "react"

const EventHandling = () => {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    function handleReset() {
        setCount(0)
    }

    return (
        <div>
            <h1>이벤트 핸들링 예</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>증가하기</button>
            <button onClick={handleReset}>초기화</button>
        </div>
    )
}

export default EventHandling