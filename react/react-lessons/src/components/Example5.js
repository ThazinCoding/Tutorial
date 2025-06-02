"use client";
import React from "react";
//Event in Class Component
export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mg Kyaw Min",
            email: "mkm@Ga_Maamli.com",
            phoneNo: "09786533125",
        };
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    }
    onChangeEmail(changedEmail) {
        this.setState({ email: changedEmail });
    }
    onChangePhoneNo(event) {
        this.setState({ phoneNo: event.target.value });
    }
    onClickButton() {
        alert("Butten 1 clicked!");
    }
    onClickButton2() {
        alert("Butten 2 clicked!");
    }

    render() {
        return (
            <div>
                <h1>Event in Class Component</h1>
                <input
                    value={this.state.name}
                    placeholder="Enter Name"
                    onChange={(event) => {
                        //console.log('onChange Name Evet:', event.target.value)
                        this.setState({ name: event.target.value })
                    }
                    }
                />
                <input
                    value={this.state.email}
                    placeholder="Enter Email"
                    onChange={(event) => this.onChangeEmail(event.target.value)}
                />
                <input
                    value={this.state.phoneNo}
                    placeholder="Enter Phone No."
                    onChange={this.onChangePhoneNo}
                />
                <button onClick={this.onClickButton}>Button 1</button>
                <button onClick={() => this.onClickButton2()}>Button 2</button>
            </div>
        )
    }
}