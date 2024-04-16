const Student6 = (props) => {

    const {firstName, lastName, email} = props
    return (
        <div>
            <h1>학생6 세부정보</h1>
            <p>학생 이름 : {firstName}</p>
            <p>학생 성 : {lastName}</p>
            <p>학생 이메일 주소 : {email}</p>
        </div>
    )
}

export default Student6