import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux'
import Login from './components/Login'
import { UserAuthWrapper } from 'redux-auth-wrapper'
// import $ from 'jquery'

import { Home, Layout, Destination, Driver } from './components'
// import SenderContainer from './containers/SenderContainer'
import Sender from './components/Sender'
import reducer from './reducers/index'
import { getShipments } from './js/utility'



const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)
//
// $.ajax({
//     type: "POST",
//     url: "http://127.0.0.1:5000/registrar",
//     data: JSON.stringify({
//         "enrollId": "sender",
//         "enrollSecret": "MS9qrN8hFjlE"
//     }),
//     success: (data) => {
//         console.log("Successfull: ",data)
//     },
//     error: (error) => {
//         console.log("Error: ",error)
//     },
//     dataType: 'json',
//     contentType: "application/json"
// })

// connectToAPI()

const initialState = getShipments()

const routingMiddleware = routerMiddleware(browserHistory)
const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(routingMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);
const store = createStore(
    reducer,
    initialState,
    enhancer
)

const history = syncHistoryWithStore(browserHistory, store)

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
    predicate: user => {
        return user.pseudo == 'sender1' && user.password == 'sender1'
    }
})

const UserIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are finally authenticated
    predicate: user => user.pseudo != 'sender1' && user.password != 'sender1',
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect /*|| '/sender'*/,
    allowRedirectBack: false
})

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                    <Route path="/sender" component={UserIsAuthenticated(Sender)} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/driver" component={Driver} />
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('mount')
)
