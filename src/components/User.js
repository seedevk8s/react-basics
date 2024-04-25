import { useState } from "react"

const User = () => {

    // const [firstName, setFirstName] = useState('호진')
    // const [lastName, setLastName] = useState('추')
    // const [email, setEmail] = useState('les@gmail.com')
    const [user, setUser] = useState({
        firstName: "호진",
        lastName: "추",
        email: "les@gmail.com"
    })

    function updateUser() {
        // setFirstName('현주')
        // setLastName('리')
        // setEmail('lee@gmail.com')
        setUser({
            firstName: '아영',
            lastName: "임",
            email: "yim@gmail.com"
        })
    }

    return (
        <div>
            <h1>사용자 세부정보</h1>
{/* 
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
 */}
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>   

            <button onClick={updateUser}>사용자 수정하기</button>
        </div>
    )
}

export default User
