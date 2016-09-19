import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'


export const DriverIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
    predicate: user => {
        return user.pseudo == 'driver1' && user.password == 'driver1'
    },
    failureRedirectPath: (state, ownProps) => '/driver_login'
})

export const DriverIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are finally authenticated
    predicate: user => user.pseudo != 'driver1' || user.password != 'driver1',
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect /*|| '/sender'*/,
    allowRedirectBack: false
})
