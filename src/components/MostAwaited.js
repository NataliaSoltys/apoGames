import React, { Component } from "react";
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

export default class MostAwaited extends Component {

    constructor() {
        super();
    }

    render() {
        const { games } = this.props;
        return (
            <div>
                <Grid container spacing={2} columns={4} sx={{p: '50px'}}>
                    {games.getMostAwaited().map(g =>
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
                                                WebkitLineClamp: 3,
                                            }}
                                            variant="body1" color="text.secondary">
                                                {g.shortDescription}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" component={Link} to={`/game/${g.id}`}>
                                        See more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )};
                </Grid>
            </div>
        );
    }
}