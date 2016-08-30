/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";

export default class Table extends React.Component {
    render() {
        let columns = this.props.columns;

        return (<table className="table table-hover table-bordered table-responsive">
            <thead>
            <tr>
                <th></th>
                <th>Factory</th>
                <th>Truck</th>
                <th>Destination</th>
                <th>timestamp</th>
                <th>Driver</th>
                <th>Volume</th>
                <th>Verified By Factory</th>
                <th>Verified By Driver</th>
                <th>Verified By Destination</th>
            </tr>
            </thead>
            <tbody>
            {columns}
            </tbody>
        </table>)
    }
}