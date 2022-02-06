import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
import Form from './Form.css'

function  mouseEnter(){
    console.log('mouse enter')
    
}

function pointerDown(){
    console.log('pointer is down')
    
}

function  mouseLeave(){
    console.log('mouse leave')
    
}

function pointerMove(){
    console.log('pointer move')
}

function pointerUp(){
    console.log('pointer up')
}

function pointerCancel(){
    console.log('pointer cancel')
}

function pointerCapture(){
    console.log('pointer capture')
}

function handleClickViaCapturing(){
    alert("Click me, and my parent's `onClickCapture` will fire *first*! ")
}
function transitionEnd(){
    console.log('End of event.')
}

function underline(){
    this.style={paddingLeft: 13, textDecoration: 'none'}
}

const Footer = () => {
   
    return (

        <footer className="bg- text-white" >

            <div className="container p-4">

                <div className="row" >
                    {/* < Form/> */}
                    <div className="col-lg-6 col-md-10 mb-4 mb-md-0">
                        <h5 className="text-uppercase">ApoGames</h5>

                        <p>
                            Our mission consists on showing you the most important informations from apocalyptic games take places in games!
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Find us:</h5>

                        <ul className="list-unstyled mb-0">
                            <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                                <a href="#!" className="text-white">Facebook</a>
                            </li>
                            <li onPointerDown={pointerDown}>
                                <a href="#!" className="text-white">Twitter</a>
                            </li>
                            <li onPointerMove={pointerMove}>
                                <a href="#!" className="text-white">YouTube</a>
                            </li>
                            <li onPointerUp={pointerUp}>
                                <a href="#!" className="text-white">Instagram</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Additional settings</h5>

                        <ul className="list-unstyled" href={underline}>
                            <li onPointerCancel={pointerCancel}>
                                <a href="#!" className="text-white">Mobile version</a>
                            </li>
                            <li onGotPointerCapture={pointerCapture}>
                                <a href="#!" className="text-white">Get news alert</a>
                            </li>
                            <li onClickCapture={handleClickViaCapturing}>
                                <a href="#!" className="text-white">Contact</a>
                            </li>
                            <li onTransitionEnd={transitionEnd}>
                                <a href="#!" className="text-white">On smart speakers</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>



            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                © 2022 Copyright:
                <a className="text-white" href="#">apogames.com</a>
            </div>

        </footer>
    );
}

export default Footer
