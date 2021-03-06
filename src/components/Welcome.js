import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Welcome.css";
import { Typography, Box } from "@mui/material";

export default class Welcome extends Component {

    waiting() {
        alert("Wait a sec...")
    }

    progress(){
        alert("Enjoy Dying Light 2 trailer...")
    }

    pausing(){
        console.log("video is Paused")
    }

    render() {
        const { firstName } = this.props;


        return (
            <div className="welcome" onWheel = {(e) => this.wheel(e)}>
                <Box sx={{ maxWidth: '500', marginLeft: 'auto', marginRight: 'auto', width: '50em', textAlign: 'center' }}>
                    <h style={{
                        fontSize: '100px',
                        fontWeight: 'bold',
                        textIndent: '-3.3em',
                        color: 'black',
                        textShadow: '-1px -2px 9px white',
                    }}>Welcome to apocalyptic games website</h>
                </Box>
                <div style={{ width: '100%', height: '100%' }}>
                    <div className="video-background">
                        <div className="video-foreground">
                            <iframe
                                title="Video"
                                src="https://www.youtube.com/embed/wo0NDwk8uns?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&start=10"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onWaiting={this.waiting}
                                onProgress={this.progress}
                                onPause={this.pausing}>
                                
                            </iframe>
                            onEnded={this.videoEnd}
                        </div>
                    </div>
                </div>
            </div>
        );

    
    }

    videoEnd() {
        alert("The video has ended");
      }
}