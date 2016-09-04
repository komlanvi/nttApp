/**
 * Created by komlanvi on 02/09/16.
 */
import Sender from '../components/Sender';
import { connect } from 'react-redux';
import React from 'react'

const mapStateToProps = (state, ownProps) => {
    return {
        shipments: state.shipments,
        users: state.users,
        filter: ownProps.location.query.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_shipments: (shipment) => {
            dispatch(add_shipments(shipment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender)