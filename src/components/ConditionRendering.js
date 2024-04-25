import { useState } from "react"

const ConditionRedering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    if(isLoggedIn) {
        return <p>환영합니다. 사용자님!</p>
    } else {
        return <p>부디 로그인하삼!</p>
    }

}

export default ConditionRedering
