import React from "react";
import { Component } from "react/cjs/react.production.min";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            navBarOptions: [
                {name: "Awarded", link: "/mostAwarded"},
                {name: "Awaited", link: "/mostAwaited"},
                {name: "Ranking", link: "/ranking"},
                {name: "GameList", link: "/gameList"}
            ]
        }
    }
    anchorElUser = null;
    anchorElNav = null;
    
    render() {
        return (
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/">
                            <img src={logo} height={70} alt="logo"/>
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {this.state.navBarOptions.map((page) => (
                                <Button
                                    component={Link}
                                    to={page.link}
                                    key={page.name}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name} 
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={this.anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(this.anchorElUser)}
                                onClose={this.anchorElNav = null}
                            >
                                {['Profile', 'Account', 'Dashboard', 'Logout'].map((setting) => (
                                    <MenuItem key={setting} onClick={this.anchorElUser = null}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}