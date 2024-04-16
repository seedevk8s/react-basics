import React from "react"

const HelloWorld2 = () => {

    // const myElement = <div><h1>안녕하세요2! KOSTA!</h1></div>
    // return myElement
    return React.createElement('div', null, React.createElement('h1', null, '안녕하세요2! KOSTA!'))
}

export default HelloWorld2