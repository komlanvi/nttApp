/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";

export default class TableColumn extends React.Component {

    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    componentDidUpdate() {
        if (this.state.checked) {
            console.log("From componentDidUpdate: " +this.state.checked);
            //alert(this.props.shipment.id+ " is check");
            this.props.addToCheckedList(this.props.shipment.id);
        } else {
            console.log("From componentDidUpdate: Not checked");
        }

    }

    render() {
        console.log(this.state.checked);
        return (
            <tr>
                <td>
                    <div className="checkbox my-checkbox">
                        <label>
                            <input onChange={this._handleChecked.bind(this)} type="checkbox" value={this.props.shipment.id} id="" />
                        </label>
                    </div>
                </td>
                <td>{this.props.shipment.factory}</td>
                <td>{this.props.shipment.truck}</td>
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

    _handleChecked() {
        this.setState({
            checked: !this.state.checked
        });
    }
}