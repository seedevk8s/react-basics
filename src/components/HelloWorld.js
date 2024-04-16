import React from "react"

const HelloWorld = () => {
    // return <h1>안녕하세요! KOSTA! </h1>
    // const myElement = <h1>안녕하세요! KOSTA! </h1>
    // return myElement

    return React.createElement('h1', null, '안녕하세요! KOSTA!')
}

export default HelloWorld

