import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

const Footer = () => {

    return (

        <footer className="bg- text-white" >

            <div className="container p-4">

                <div className="row" >

                    <div className="col-lg-6 col-md-10 mb-4 mb-md-0">
                        <h5 className="text-uppercase">ApoGames</h5>

                        <p>
                            Our mission consists on showing you the most important informations from apocalyptic games take places in games!
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Find us:</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">YouTube</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Instagram</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Additional settings</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Mobile version</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Get news alert</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Contact</a>
                            </li>
                            <li>
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
