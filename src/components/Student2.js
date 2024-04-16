const Student2 = (props) => {

    return (
        <div>
            <h1>학생2 세부정보</h1>
            <p>학생 이름 : {props.firstName}</p>
            <p>학생 성 : {props.lastName}</p>
            <p>학생 이메일 주소 : {props.email}</p>
        </div>
    )
}

export default Student2