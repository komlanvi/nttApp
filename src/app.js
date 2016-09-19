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
import { SenderIsAuthenticated, SenderIsNotAuthenticated } from './auth/SenderAuth'
import { DriverIsAuthenticated, DriverIsNotAuthenticated } from './auth/DriverAuth'
import { DestinationIsAuthenticated, DestinationIsNotAuthenticated } from './auth/DestinationAuth'
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

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/sender_login" component={SenderIsNotAuthenticated(Login)}/>
                    <Route path="/driver_login" component={DriverIsNotAuthenticated(Login)}/>
                    <Route path="/destination_login" component={DestinationIsNotAuthenticated(Login)}/>
                    <Route path="/sender" component={SenderIsAuthenticated(Sender)} />
                    <Route path="/destination" component={DestinationIsAuthenticated(Destination)} />
                    <Route path="/driver" component={DriverIsAuthenticated(Driver)} />
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('mount')
)
