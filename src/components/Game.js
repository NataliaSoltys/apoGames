import React, { Component } from 'react';
import './MostAwarded.css'; 
import {
    useParams 
  } from "react-router-dom";

class Game extends Component {

    params;

    constructor(){
        super();
        
        //this.params = useParams();
    }

    render(){
        return(
            <div>
                <h2>{this.props.params.gameId}</h2>
                
            </div>
        );
    }
}

export default (props) => (
    <Game
        {...props}
        params={useParams()}
    />
);