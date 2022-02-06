import React, { Component } from 'react'
import Clnner from './CInner'
import './COuter.css'
import styl from './COuter.module.css'
import GameList from './GameList.js'

export default class COuter extends GameList {

    constructor(props) {
        super(props)
        this.state = {
            st: "Poczatek"
        }

        console.log('whole div form has been called')

        this.handlerCopy = this.handlerCopy.bind(this);
    }

    handlerCopy(e) {
        console.log(e.target.innerHTML);
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();

        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));

        alert('Don\'t copy it!');
    }

    compositionEvent() {
        console.log("composition events are working")
    }

    submit(){
        alert("thanks for submition")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Outer - get Derived State From Props")
        return null
    }

    componentDidMount() {
        console.log("Outer - component has mounted")
    }


    render(onClick, onToggle) {
        console.log("rendering outer form component...")
        console.log(this.props)

        return (
            <div className='bgClassNormal' onCopy={this.handlerCopy} onCompositionStart={this.compositionEvent} onCompositionEnd={this.compositionEvent} onCompositionUpdate={this.compositionEvent} >
                <h2 className={styl.bgClassModule}>Join newsletter</h2>
                <Clnner />
                <button onClick={this.stateChange} onToggle={onToggle ? onToggle : null} onSubmit={this.submit}>I'm in!</button>
                <p>{this.props.name}</p>
            </div>
        )
    }

    stateChange = () => {
        this.setState({ st: "Newsletter done" })
    }

    stateChange = () => {
        this.setState({ st: "State done" })
    }


    getSnapshotBeforeUpdate(pprops, pstate) {
        console.log("This is outer snapshot before update")
        return null
    }

    componentDidUpdate() {
        console.log("Outer has updated")
    }


}
