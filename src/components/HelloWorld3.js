const HelloWorld3 = () => {

    function handleClick() {
        alert("버튼 클릭됨!")
    }

    return (
        <div>
            <h1 className="title">제목</h1>
            <h2>소제목</h2>
            <p>문단</p>
            <image>이미지</image>
            <button onClick={handleClick}>클릭</button>
        </div>
    )

}

export default HelloWorld3