import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Welcome.css";

class Welcome extends Component {
    render() {
        const { firstName } = this.props;
        return (
            <div>
                <h3>cytat jakis</h3>
                <h1>apoGames</h1>
                <h1>Welcome to our family {firstName}!</h1>

            </div>
        );
    }
}

export default Welcome;