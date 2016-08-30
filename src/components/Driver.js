/**
 * Created by doncredas on 22/07/16.
 */
import React from "react";
import Table from './Table';
import TableColumn from './TableColumn';

var chaincode = "c2addf536d9cb507530561a99e6d90a26eacdf9ea961cf0c07ef56956e728a697e2ab943735694242c2bf8ca2cee0a5a0fd010be7fe6c96edf7d8606f7183a43";

export default class Driver extends React.Component {


    constructor(){
        super();
        this.state = {
            shipments: [],
            checkedList: []
        }
    }

    componentWillMount() {
        this._fetchShipments();
    }

    componentDidMount() {
        //this._timer = setInterval(() => this._fetchShipments(), 4000);
    }

    componentWillUnmount() {
        //clearInterval(this._timer);
    }

    _fetchShipments() {
        /*$.ajax({
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

         //alert(str);
         this.setState({
         shipments: arr
         });
         },
         error: (error) => {
         console.log(error);
         },
         dataType: "json",
         contentType: "application/json"
         });*/

        var x = [
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
            }];
        x.map((ship) => {
            console.log(ship);
        });

        //alert(str);
        this.setState({
            shipments: x
        });
    }

    _getColumns() {
        //console.log(this.state.shipments);
        return this.state.shipments.map((c) => {
            return <TableColumn shipment={c} key={c.id} addToCheckedList={this._addToCheckedList.bind(this)}/>
        });
    }

    _verify() {
        this.state.checkedList.map((id) => {
            this.state.shipments.map((shipment) => {
                if(shipment.id == id) {
                    console.log(shipment.factory +" has been verified");
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
            });
        })
    }

    _addToCheckedList(checked) {
        if(this.state.checkedList.indexOf(checked) < 0) {
            this.setState({
                checkedList: this.state.checkedList.concat([checked])
            });
        }

    }

    componentDidUpdate() {
        console.log(this.state.checkedList);
    }

    render() {
        return (
            <div>
                <Table columns={this._getColumns()} />
                <div className="col-md-8 col-md-offset-2 text-center mb20">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-1">
                            <a href="#" role="button" onClick={this._handleVerify.bind(this)} className="btn btn-primary btn-lg btn-block">Verify</a>
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <a href="#" role="button" onClick={this._handleRefresh.bind(this)} className="btn btn-warning btn-lg btn-block">Refresh</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _handleRefresh(e) {
        e.preventDefault();
        this._fetchShipments();
    }

    _handleVerify(e) {
        e.preventDefault();
        this._verify();
    }
}