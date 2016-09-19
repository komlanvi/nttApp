/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";
import {Link} from "react-router";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-8 col-md-offset-2 text-center" style={{ marginTop: 20 +"px"}}>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/sender" role="button" className="btn btn-primary btn-lg btn-block">Sender</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/driver" role="button" className="btn btn-success btn-lg btn-block">Driver</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/destination" role="button" className="btn btn-warning btn-lg btn-block">Destination</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}