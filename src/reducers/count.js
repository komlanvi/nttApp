import * as type from '../constants'

const initialState = {
    number: 1,
    shipments: [],
    checkedList: []
}

export function update(state = initialState, action) {
  if(action.type === type.INCREASE) {
    return { number: state.number + action.amount }
  }
  else if(action.type === type.DECREASE) {
    return { number: state.number - action.amount }
  }
  return state
}


export function add_shipments(state = initialState, action) {
    switch (action.type) {
        case type.ADD_SHIPMENTS:
            return {
                ...state,
                shipments: [
                    state.shipments,
                    ...action.shipments
                ]
            };
        default:
            return state
    }
}

export function refresh_checked_list(state = initialState, action) {
    switch (action.type) {
        case type.REFRESH_CHECKED_LIST:
            return {
                ...state,
                checkedList: action.checkedList
            };
        default:
            return state
    }
}

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