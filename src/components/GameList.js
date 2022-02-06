import React, { Component } from "react";
import './GameList.css'
import jsonData from '../res/text.json';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './GameList.css'

class GameList extends Component {

    constructor(props) {
        super(props)
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.state = { msg: 'Yes!', value: 0 , name: 'Alex'}

    }

    changeMsg = () => {
        this.setState({ msg: 'Thank you, for your opinion.' });
        
    }


    render() {
        const items = [];
        for (let i = 0; i < this.txtData().count; i++) {
            let value = this.txtData().text[i];
            items.push(
                <div className="contentsFlex">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                        }}>
                            <p className="contentsFlexTxt">{value}</p>
                        </Typography>

                    </CardContent>

                </div>

            );

        }

        const name = this.state.name;
        let comp;

        if (name) {

            comp = <h1> Thank you for your contribution to the development of the website, {this.state.name} .</h1>

        } else {

            comp = <h1>Thank you for your contribution to the development of the website, user.</h1>

        }

        return (

            <div className='names'>
                <h2 className="gamesAwaited">Games that you can find on our website:</h2>

                {items}

                <h2>Do you want to see more games on our website?</h2>
                <button onClick={this.changeMsg}><h1>{this.state.msg}</h1></button>
                <div>
                    <div className="gettingStart">
                        {comp}
                    </div>
                </div>
                <p></p>

            </div>
        );
    }
}
export default GameList