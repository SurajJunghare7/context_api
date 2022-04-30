import React from "react";

class ClassCompDemo extends React.Component {

    // when component updated
    componentDidMount() {
        console.log("ClassCompDemo is Loaded!")
    }
     
    // when components is getting upadated
    componentDidUpdate() {
         console.log("ClassCompDemo is Updated!")
    }

    // when components is closing/unmounting
    componentWillUnmount() {
         console.log("ClassCompDemo is unloaded!")
    }

    constructor () {

        super();

        // console.log("Hiiii!")

        console.log("ClassCompDemo Is Loaded!")

        this.state = {
            firstName : "Akash",
            lastName : "Mokashi"
        }

    }

    render() {
        return (
            <>
            <h1>Hello {this.state.firstName}, Welcome To Classbase Component! </h1>
            <button onClick={() => this.setState({ firstName: "Vinod" })}>Change Name</button>
            </>
        )
    }
}

export default ClassCompDemo;