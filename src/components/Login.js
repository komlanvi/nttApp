/**
 * Created by doncredas on 17/08/16.
 */

import React from "react";
import { connect } from 'react-redux'
import { authenticated } from '../actions/count'

class Login extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {
            handleAuthentication
        } = this.props;
        return (
            <div className="col-md-4 col-md-offset-4">
                <h1>Login</h1>
                <form onSubmit={(e) =>  {
                    {/*alert("name " + this._pseudo.value+ " --- password " +this._password.value);*/}
                    e.preventDefault();
                    handleAuthentication(this._pseudo.value, this._password.value);
                }}>
                    <div className="form-group">
                        <label className="control-label " htmlFor="pseudo">Pseudo:</label>
                        <input ref={
                            (pseudo) => this._pseudo = pseudo
                        } type="text" className="form-control" id="pseudo"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label " htmlFor="password">Password:</label>
                        <input ref={
                            (password) => this._password = password
                        } type="password" className="form-control" id="password" />
                    </div>
                    <button role="button" className="btn btn-primary btn-lg btn-block btn-normal" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProp) => {
    console.log("User name: ", state.user.pseudo, " and pass = ", state.user.password)
    console.log("Alert message: ", state.alertMessage)
    return {
        id: ownProp.id,
        alertMessage: state.alertMessage
    }
}

const mapDispatchToProps = (dispatch, ownProp) => {
    return {
        handleAuthentication: (pseudo, password) => {
            console.log("name " +pseudo+ " --- pass " +password);
            dispatch(authenticated(pseudo, password));
            // ownProp.location.query.redirect = '/driver'
            // dispatch(addNotification('Incorrect pseudo or password!' ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)