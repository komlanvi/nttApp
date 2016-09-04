/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";
import {Link} from "react-router";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header" style={{paddingLeft: 37 +'%'}}>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Home</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav text-center">/
                            <li><Link to="/sender">Sender</Link></li>
                            <li><Link to="/driver">Driver</Link></li>
                            <li><Link to="/destination">Destination</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}