import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Welcome.css";
import {Typography, Box} from "@mui/material";

export default class Welcome extends Component {
    render() {
        const { firstName } = this.props;
        return (
            <div>
                <Box sx={{ maxWidth: '500', marginLeft: 'auto', marginRight: 'auto', width: '50em', textAlign: 'center' }}>
                    <h style={{
                        fontSize: '100px',
                        fontWeight: 'bold',
                        textIndent: '-3.3em',
                        color: 'white',
                        textShadow: '-1px -2px 9px black',
                    }}>Welcome to apocalyptic games website</h>
                </Box>
                <div style={{width: '100%', height: '100%'}}>
                    <div className="video-background">
                        <div className="video-foreground">
                            <iframe
                                title="Video"
                                src="https://www.youtube.com/embed/5A1edn4Ktdg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&start=9"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0" 
                                allowFullScreen>
                                
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}