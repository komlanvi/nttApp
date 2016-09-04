/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";

export default class TableColumn extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <div className="checkbox my-checkbox">
                        <label>
                            <input onChange={this._handleChecked.bind(this)} type="checkbox" value={this.props.id} id={this.props.id} />
                        </label>
                    </div>
                </td>
                <td>{this.props.shipment.sender}</td>
                <td>{this.props.shipment.logistics}</td>
                <td>{this.props.shipment.destination}</td>

                <td>{this.props.shipment.timestamp}</td>
                <td>{this.props.shipment.driver}</td>
                <td>{this.props.shipment.volume}</td>
                <td>{this.props.shipment.vbf}</td>
                <td>{this.props.shipment.vbdr}</td>
                <td>{this.props.shipment.vbde}</td>
            </tr>
        )
    }

    _handleChecked(e) {
        if (e.target.checked) {
            this.props.addToCheckedList(e.target.value, true)
        } else {
            this.props.addToCheckedList(e.target.value, false)
        }
    }
}