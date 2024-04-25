import { useState } from "react"

const ConditionRedering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message
    if(isLoggedIn) {
        message = /* return */ <p>환영합니다. 사용자님!</p>
    } else {
        message = /* return */ <p>부디 로그인하삼!</p>
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }

    return (
        <div>
            <br />
            {message}

            {
                isLoggedIn ? <p>환영합니다. 사용자님2!</p> : <p>부디 로그인하삼2!</p>
            }

            {
                isLoggedIn && <p>환영합니다. 사용자님3!</p>
            }
            
            <button onClick={handleLogin}>로그인</button>

        </div>
    )

}

export default ConditionRedering
