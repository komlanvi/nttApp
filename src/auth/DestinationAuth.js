import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'


export const DestinationIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
    predicate: user => {
        return user.pseudo == 'destination1' && user.password == 'destination1'
    },
    failureRedirectPath: (state, ownProps) => '/destination_login'
})

export const DestinationIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are finally authenticated
    predicate: user => user.pseudo != 'destination1' || user.password != 'destination1',
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect /*|| '/sender'*/,
    allowRedirectBack: false
})
