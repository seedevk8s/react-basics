import { useState } from "react"

const ConditionRedering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message
    if(isLoggedIn) {
        message = /* return */ <p>환영합니다. 사용자님!</p>
    } else {
        message = /* return */ <p>부디 로그인하삼!</p>
    }

    return (
        <div>
            {message}
        </div>
    )

}

export default ConditionRedering
