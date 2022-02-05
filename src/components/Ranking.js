import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

export default class Ranking extends Component {

    constructor() {
        super();
    }

    render() {
        const { games } = this.props;
        return (
            <div>
                <h2 className="gamesAwaited">Apocalyptic games ranking:</h2>
                <Grid container spacing={2} columns={4} sx={{ p: '50px' }}>
                    {games.getGamesRanking().map(g =>
                        <Grid item xs={1} sm={1} md={1} key={g.id}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="330"
                                        image={g.img}
                                        alt={g.img}
                                    />
                                    <CardContent>
                                        
                                        
                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                        }}>
                                            {g.name}
                                        </Typography>

                                        <Typography sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                            fontSize: '30px'
                                        }}>
                                            score: {g.ranking}
                                        </Typography>

                                        <Typography sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                        }}
                                            variant="body1" color="text.secondary">
                                            {g.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {/* <Button size="small" color="primary" component={Link} to={`/game/${g.id}`}>
                                        See more
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    )};
                </Grid>
            </div>
        );
    }
}