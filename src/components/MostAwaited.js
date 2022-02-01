import React, {Component} from "react";
import Favorite from '@mui/icons-material/Favorite';

export default class MostAwaited extends Component {

    constructor(){
        super()
        
    }

    render() {
        return (
            <div>
                <Favorite color="error" fontSize="large"/>
            </div>
        );
    }
}