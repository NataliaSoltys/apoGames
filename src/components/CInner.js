import { Component } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default class Clnner extends Component {
    constructor(props) {
        super(props)
        this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
        this.handleLogin2KeyDown = this.keyDownHandler.bind(this, 'Login2Input');
        this.state = {}
        console.log('form constructor has been called')
    }

    keyUpHandler(refName, e) {
        console.log(refName);
    }

    keyDownHandler(refName, e) {
        console.log(refName);
    }

    validateUsername(){
        console.log("Dont cut me")
    }

    touchStart(){
        console.log("Screen has been touched.")
    }

    touchMove(){
        console.log("Touching screen.")
    }

    touchEnd(){
        console.log("Interaction ending.")
    }

    handlePaste(){
        console.log("pasting")
    }

    reseting(){
        console.log("reseting")
    }

    validation(){
        console.log("validation input")
    }

    static getDerivedStateFromProps(props, state){ 
        console.log("lnner form component - get Derived State From Props") 
        return null 
    } 
    
    componentDidMount(){ 
        console.log("lnner form component has mounted") 
    } 

    render() {
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
            >
                <Input defaultValue="first name" inputProps={ariaLabel} onChange={this.myFunction} onInput={this.myFunction} onKeyUp={this.handleLoginKeyUp} onCut={this.validateUsername()} onInvalid={this.validation} ref="LoginInput"/>
                <Input defaultValue="second name" inputProps={ariaLabel} onFocus={this.backgroundChange} onKeyDown={this.handleLogin2KeyDown} onReset={this.reseting} ref="Login2Input"/>
                <Input defaultValue="e-mail" error inputProps={ariaLabel} onKeyPress={this.keyPressed} onPaste={this.handlePaste} onBlur={(e) => {console.log('Wywołano, bo pole straciło fokus');}}/>
            </Box>
        )
    }

   

    myFunction() {
        console.log("onChange or onInput activated")
    }

    backgroundChange(x) {
        x.target.style.background = "black"
    }

    keyPressed() {
        alert("You pressed a key inside the input field");
    }

    getSnapshotBeforeUpdate(pprops, pstate){ 
        console.log("This is outer form component snapshot before update") 
        return null 
    } 
    
    componentDidUpdate(){ 
        console.log("Outer form component has updated") 
    } 
    
}
