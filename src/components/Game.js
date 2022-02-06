import React, { Component } from 'react';
import './MostAwarded.css';
import Favorite from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import {
    useParams
} from "react-router-dom";

class Game extends Component {

    params;
    

    constructor() {
        super();
    }

    imagestore()
    {
    const imgUrls=this.props.apikeys;
    const objarr = Object.values(imgUrls);
    this.setState({
        imagesarray: objarr
    });
    }

    

    render() {
        const { games } = this.props;
        var id = this.props.params.gameId;
        let game = games.getGame(id)
        console.log(games.getGame(id))
        return (
            <div>
                {game.map(g =>
                    
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    src={`/${g.img}`}   //`"div${item.id}"`
                                    alt={g.img}
                                    onLoad= {() => this.imagestore()}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src=`/${g.img}`
                                      }}
                                />
                                <CardContent>
                                    
                                    <Typography sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        fontSize: '30px'
                                    }}>
                                        {g.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                    }} >
                                        {g.name}
                                    </Typography>
                                    <Typography sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        
                                    }}
                                        variant="body1" color="text.secondary">
                                        {g.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                            </CardActions>
                        </Card>
                    
                )};
           
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