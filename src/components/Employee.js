import React from "react";

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "호진",
            lastName: "추",
            email: "les@gmail.com"
        }
    }
    

    render() {
        return (
            <div>
                <h1>노동자 세부정보</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}

export default Employee
