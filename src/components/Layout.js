import React from "react";
import Navbar from './Navbar';

export default class Layout extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/*<Navbar />*/}
                <div className="container">
                    <div className="starter-template">
                        <a href="/"><img style={{width: 200+"px", height: 80 +"px"}} src="./nttdata.png" alt=""/></a>
                        <h1>Hyperledger</h1>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}