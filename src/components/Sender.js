/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";
import Table from './Table';
import TableColumn from './TableColumn';
import chaincode from '../js/utility';
import { refresh_checked_list, add_shipments } from '../actions/count';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Sender extends React.Component{

    constructor(){
        super();
        this.state = {
            checkedList: [],
            changedId: 0
        }
    }


    //GET ALL

    _listaShipments()
    {   /*
        $.ajax({
            type: "POST",
            url: "http://10.186.65.231:5000/chaincode",
            data: JSON.stringify(
                {
                    "jsonrpc": "2.0",
                    "method": "query",
                    "params": {
                        "type": 1,
                        "chaincodeID":{
                            "name": `${chaincode}`
                        },
                        "ctorMsg": {
                            "function":"get_shipments",
                            "args":["factory_1","truck_1","destination_1"]
                        },
                        "secureContext": "factory_nvp"
                    },
                    "id": 5
                }
            ),
            success: (shipments, status) => {
                var str = JSON.stringify(shipments, null, 4);
                console.log("Successfully fetched " +str);
                console.log(shipments["result"]["message"]);

                shipments = JSON.parse(shipments["result"]["message"])

                let arr = [];

                for(var key in shipments) {
                    if(shipments.hasOwnProperty(key)) {
                        console.log(shipments[key]);
                        let obj = {};
                        let length = shipments[key].length;
                        for(var i = 0; i < length; i++) {
                            //console.log("Key = " +shipments[key][i] + " and object is " +shipments[key][i]);
                            if (i == 0) {
                                obj["factory"] = shipments[key][i];
                            } else if (i == 1) {
                                obj["truck"] = shipments[key][i];
                            } else if (i == 2) {
                                obj["destination"] = shipments[key][i];
                            } else if (i == 3) {
                                obj["timestamp"] = shipments[key][i];
                            } else if (i == 4) {
                                obj["driver"] = shipments[key][i];
                            } else if(i == 5) {
                                obj["volume"] = shipments[key][i];
                            }else if(i == 6){
                                obj["vbf"] = shipments[key][i];
                            }else if(i == 7){
                                obj["vbdr"] = shipments[key][i];
                            }else if(i == 8){
                                obj["vbde"] = shipments[key][i];
                            } else if(i == length-1) {

                            }
                            obj["id"] = Math.random();
                            //console.log("Obj[" +shipments[key][i]+ "] = " +obj[shipments[key][i]]);
                        }
                        if(!$.isEmptyObject(obj)) arr.push(obj);
                    }
                }

                arr.map((ship) => {
                    console.log(ship);
                });
                //
                // //alert(str);
                // this.setState({
                //     shipments: arr
                // });
                this.props._fetchShipments();
            },
            error: (error) => {
                console.log(error);
            },
            dataType: "json",
            contentType: "application/json"
        });*/
        // //alert(x);
        // this.setState({
        //     shipments: x
        // });
        // this.props.add_shipments(x);
    }

    //ADD
    _aggiungiNuovoShipment() {
        /*$.ajax({
            type: "POST",
            url: "http://10.186.65.231:5000/chaincode",
            data: JSON.stringify(
                {
                    "jsonrpc": "2.0",
                    "method": "invoke",
                    "params": {
                        "type": 1,
                        "chaincodeID":{
                            "name": `${chaincode}`
                        },
                        "ctorMsg": {
                            "function":"shipment",
                            "args":[ `${this._factory.value}`, `${this._truck.value}`, `${this._driver.value}`, `${this._volume.value}`, `${this._destination.value}`]
                        },
                        "secureContext": "factory_nvp",
                        "attributes": ["create"]
                    },
                    "id": 3
                }
            ),
            success: (data, status) => {
                var str = JSON.stringify(data, null, 4);
                //str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
                console.log("Successfully posted "+str);

                this.setState({
                    shipments: this.state.shipments.concat([])
                })
            },
            error: (error) => {
                console.log(error);
            },
            dataType: "json",
            contentType: "application/json"
        });*/
        this.shipmentsId = this.props.shipments.length;
        console.log("Shipments length: ", this.shipmentsId)
        this.props.add_shipments({
            id: ++this.shipmentsId,
            factory: `${this._factory.value}`,
            truck: `${this._truck.value}`,
            destination: `${this._destination.value}`,
            timestamp: '',
            driver: `${this._driver.value}`,
            volume: `${this._volume.value}`
        })
    }

    _getColumns() {
        console.log("Shipments: ", this.props.shipments);
        return this.props.shipments.map((c) => {
            return <TableColumn shipment={c} key={c.id} id={c.id} addToCheckedList={this._addToCheckedList.bind(this)}/>
        });
    }

    _verify() {
        this.state.checkedList.map((checkedShipment) => {
            this.props.shipments.map((shipment) => {
                if(shipment.id == checkedShipment.id) {
                    console.log("Shipment with id = ", shipment.id +" has been verified");
                    /*$.ajax({
                        type: "POST",
                        url: "http://10.186.65.231:5000/chaincode",
                        data: JSON.stringify(
                            {
                                "jsonrpc": "2.0",
                                "method": "invoke",
                                "params": {
                                    "type": 1,
                                    "chaincodeID":{
                                        "name":`${chaincode}`
                                    },
                                    "ctorMsg": {
                                        "function":"verify",
                                        "args":["factory_1","truck_1","destination_1",`${shipment.timestamp}`]

                                    },
                                    "secureContext": "factory_nvp",
                                    "attributes": ["verify", "id"]
                                },
                                "id": 3
                            }
                        ),
                        success: (success) => {
                            console.log(success);
                        },
                        error: (error) => {
                            console.log(error);
                        },
                        dataType: "json",
                        contentType: "application/json"
                    });*/
                }
            })
        })
        this.props.refresh_checked_list(this.state.checkedList)
    }

    _addToCheckedList(shipmentId, checked) {
        this.setState({
            changedId: shipmentId
        })
        if (checked) {
            this.setState({
                checkedList: this.state.checkedList.concat(this.props.shipments.filter((shipment) => {
                    if (shipment.id == shipmentId) {
                        return shipment
                    }
                }))
            });
            // console.log("After added ",shipmentId, " :", this.state.checkedList)
        } else {
            this.setState({
                checkedList: this.state.checkedList.filter((shipment) => {
                    if (shipment.id != shipmentId) {
                        return shipment
                    }
                })
            });
            // console.log("After removed ",shipmentId, " :", this.state.checkedList)
        }
    }

    componentDidUpdate() {
        console.log("After added/removed ",this.state.changedId, " :", this.state.checkedList)
    }

    render() {
        const { shipments, users} = this.props;
        console.log("Users: ", users)
        console.log("Shipments: " +shipments)
        return (
            <div>
                <Table columns={this._getColumns()}  />
                <div className="col-md-8 col-md-offset-2 text-center mb20">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#" role="button" onClick={this._handleVerify.bind(this)} className="btn btn-primary btn-lg btn-block">Verify</a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" role="button" onClick={this._handleRefresh.bind(this)} className="btn btn-warning btn-lg btn-block">Refresh</a>
                        </div>

                        <div className="col-md-4">
                            <a href="#" role="button" className="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">Add</a>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Add New Shipment</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this._handleAddShipment.bind(this)}>
                                    <div className="form-group mb5">
                                        <label className="control-label col-sm-2" htmlFor="factory">Sender:</label>
                                        <div className="col-sm-10">
                                            <input ref={
                                                (factory) => this._factory = factory
                                            } type="text" className="form-control" id="factory" defaultValue="factory_1"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb5">
                                        <label className="control-label col-sm-2" htmlFor="truck">Truck:</label>
                                        <div className="col-sm-10">
                                            <input ref={
                                                (truck) => this._truck = truck
                                            } type="text" className="form-control" id="truck" defaultValue="truck_1"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb5">
                                        <label className="control-label col-sm-2" htmlFor="driver">Driver:</label>
                                        <div className="col-sm-10">
                                            <input ref={
                                                (driver) => this._driver = driver
                                            } type="text" className="form-control" id="driver" defaultValue="driver_1"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb5">
                                        <label className="control-label col-sm-2" htmlFor="volume">Volume:</label>
                                        <div className="col-sm-10">
                                            <input ref={
                                                (volume) => this._volume = volume
                                            } type="text" className="form-control" id="volume" placeholder="Enter the volume"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb5">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Destination:</label>
                                        <div className="col-sm-10">
                                            <input ref={
                                                (destination) => this._destination = destination
                                            } type="text" className="form-control" id="destination" defaultValue="destination_1" />
                                        </div>
                                    </div>
                                    <button role="button" className="btn btn-lg btn-block btn-normal" type="submit">Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _handleAddShipment(e) {
        e.preventDefault();
        this._aggiungiNuovoShipment();
    }

    _handleRefresh(e) {
        e.preventDefault();
        this._listaShipments();
    }

    _handleVerify(e) {
        e.preventDefault();
        this._verify();
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("Store from map: ", state)
    console.log("Store from map: ", state.users)
    return {
        shipments: state.shipments,
        users: state.users,
        filter: ownProps.location.query.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ refresh_checked_list, add_shipments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender)