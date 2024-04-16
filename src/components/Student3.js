const Student3 = (props) => {

    return (
        <div>
            <h1>학생3 세부정보</h1>
            <p>학생 이름 : {props.student.firstName}</p>
            <p>학생 성 : {props.student.lastName}</p>
            <p>학생 이메일 주소 : {props.student.email}</p>
        </div>
    )
}

export default Student3
