import { Component } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default class Clnner extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log('CInner - konstruktor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Clnner - getDerivedStateFromProps()")
        return null
    }

    componentDidMount() {
        console.log("Clnner - componentDidMount()")
    }

    render() {
        console.log("CInner - render()")
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <Input defaultValue="first name" inputProps={ariaLabel} />
                <Input defaultValue="second name" inputProps={ariaLabel} />
                <Input defaultValue="e-mail" error inputProps={ariaLabel} />
            </Box>
        )
    }

    shouldComponentUpdate() {
        console.log("COuter - shouldComponentUpdate()")
        return true
    }

    getSnapshotBeforeUpdate(pprops, pstate) {
        console.log("COuter - getSnapshotBeforeUpdate()")
        return null
    }

    componentDidUpdate() {
        console.log("COuter - componentDidUpdate()")
    }


}
