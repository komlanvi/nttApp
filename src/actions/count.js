import * as type from '../constants'

export function increase(n) {
    return {
        type: type.INCREASE,
        amount: n
    }
}

export function decrease(n) {
    return {
        type: type.DECREASE,
        amount: n
    }
}
export function add_shipments(shipments = []) {
    return {
        type: type.ADD_SHIPMENTS,
        shipments
    }
}

export function refresh_checked_list(checkedList = []) {
    return {
        type: type.REFRESH_CHECKED_LIST,
        checkedList
    }
}

export const authenticated = (pseudo, password) => {
    return {
        type: 'USER_LOGGED_IN',
        user: {
            pseudo,
            password
        }
    }
}
//
// export function remove_from_checked_list(uncheckedIndexList = []) {
//     return {
//         type: type.REMOVE_FROM_CHECKED_LIST,
//         uncheckedIndexList
//     }
// }

