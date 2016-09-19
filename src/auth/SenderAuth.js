import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions, replace } from 'react-router-redux'
import { addNotification } from '../actions/count'

export const SenderIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
    predicate: user => {
        return user.pseudo == 'sender1' && user.password == 'sender1'
    },
    failureRedirectPath: (state, ownProps) => '/sender_login'
})

export const SenderIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are finally authenticated
    predicate: user => user.pseudo != 'sender1' || user.password != 'sender1',
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect /*|| '/sender'*/,
    allowRedirectBack: false
})
