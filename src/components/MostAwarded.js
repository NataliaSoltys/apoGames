import React, { Component } from 'react';
import './MostAwarded.css'; 
import jsonData from "../res/games.json"

export default class MostAwarded extends Component {

    constructor(){
        super()
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    }

    render(){
        return(
            <div>
                <h2>Here you can find the most awarded post-apocalyptic games:</h2>
                
            </div>
        );
    }
}