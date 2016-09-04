import * as type from '../constants'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const usersState = {
    "1": {id: "1", name: "sender1", password: "sender1"},
    "2": {id: "2", name: "sender2", password: "sender2"}
}

const initialShipments = [
    {
        id: 1,
        factory: "factory1",
        truck: "truck1",
        destination: "gas_station1",
        timestamp: "timestamp1",
        driver: "driver1",
        volume: "volume"
    },
    {
        id: 2,
        factory: "factory2",
        truck: "truck1",
        destination: "gas_station1",
        timestamp: "timestamp1",
        driver: "driver1",
        volume: "volume"
    },
    {
        id: 3,
        factory: "factory3",
        truck: "truck1",
        destination: "gas_station1",
        timestamp: "timestamp1",
        driver: "driver1",
        volume: "volume"
    }]
// export function update(state = initialState, action) {
//     if(action.type === type.INCREASE) {
//         return { number: state.number + action.amount }
//     }
//     else if(action.type === type.DECREASE) {
//         return { number: state.number - action.amount }
//     }
//     return state
// }

const users = (state = usersState, action) => {
    return state
}

const shipments = (state = initialShipments, action) => {
    switch (action.type) {
        case type.ADD_SHIPMENTS:
            return [
                ...state,
                action.shipments
            ];
        default:
            return state
    }
}

function checked_list(state = [], action) {
    switch (action.type) {
        case type.REFRESH_CHECKED_LIST:
            return [
                ...action.checkedList
            ];
        default:
            return state
    }
}

export default combineReducers({
    users,
    shipments,
    checked_list,
    routing: routerReducer
})

// export function remove_from_checked_list(state = initialState, action) {
//     switch (action.type) {
//         case type.REMOVE_FROM_CHECKED_LIST:
//             return {
//                 ...initialState,
//                 checkedList: [
//                     return action.uncheckedIndexList.filter((shipment) => {
//                         var c = a.filter(function(item) {
//                             return b.indexOf(item) === -1;
//                         });
//                     });
//                     ...state.checkedList.slice(0, action.index),
//                     ...state.checkedList.slice(action.index+1)
//                 ]
//             };
//         default:
//             return state
//     }
// }