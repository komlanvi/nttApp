/**
 * Created by komlanvi on 01/09/16.
 */
// import $ from 'jquery'

export var chaincode = "cbe3c45daf21a9873cfef5e11942881428c47ca5a188d340f689af6756e9880741572131373952790b5acd2d32a261d64d298e269eea124af699a0c955372111";

let id = 0;

export const getShipments = () => {/*
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/chaincode",
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
                        "Function": "get_shipments_sender",
                        "Args":["sender_1", "sender_employee"]
                    },
                    "secureContext": "sender",
                    "attributes": ["id"]
                },
                "id": 5
            }

        ),
        success: (shipments, status) => {
            var str = JSON.stringify(shipments, null, 4);
            console.log("Successfully fetched " +str);
            console.log("Shipments => ", shipments["result"]["message"]);

            shipments = JSON.parse(shipments["result"]["message"])
            console.log("SHipments => ", shipments["Shipment"])

            let arr = [];

            for(var key in shipments) {
                if(shipments.hasOwnProperty(key)) {
                    console.log("Shipment key: ", shipments[key]);
                    let obj = {};
                    let length = shipments[key].length;
                    for(var i = 0; i < length; i++) {
                        //console.log("Key = " +shipments[key][i] + " and object is " +shipments[key][i]);
                        if (i == 0) {
                            obj["sender"] = shipments[key][i];
                        } else if (i == 1) {
                            obj["logistics"] = shipments[key][i];
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
                        obj["id"] = id++;
                        //console.log("Obj[" +shipments[key][i]+ "] = " +obj[shipments[key][i]]);
                    }
                    if(!$.isEmptyObject(obj)) arr.push(obj);
                }
            }

            arr.map((ship) => {
                console.log(ship);
            });
        },
        error: (error) => {
            console.log("Error: ", error);
        },
        dataType: "json",
        contentType: "application/json"
    });*/
    return {
        users: {
            "1": {id: "1", name: "sender_1", password: "sender_1"},
            "2": {id: "2", name: "sender_2", password: "sender_2"}
        },
        shipments: [
            {
                id: 1,
                sender: "sender_1",
                logistics: "logistics_1",
                destination: "destination_1",
                volume: "volume_1",
                sender_employee: "sender_employee",
                driver: "driver_1",
                timestamp: "timestamp_1"
            },
            {
                id: 2,
                sender: "sender_2",
                logistics: "logistics_2",
                destination: "destination_2",
                volume: "volume_2",
                sender_employee: "sender_employee",
                driver: "driver1",
                timestamp: "timestamp_2"
            },
            {
                id: 3,
                sender: "sender_3",
                logistics: "logistics_3",
                destination: "destination_3",
                volume: "volume_3",
                sender_employee: "sender_employee",
                driver: "driver_3",
                timestamp: "timestamp_3"
            }
        ],
        checked_list: []
    }
}

export const createShipment = (id, sender, logistics, destination, volume, driver) => {/*
    $.ajax({
        url: "",
        data: JSON.stringify({
            "jsonrpc": "2.0",
            "method": "invoke",
            "params": {
                "type": 1,
                "chaincodeID":{
                    "name": `${chaincode}`
                },
                "ctorMsg": {
                    "Function":"shipment",
                    "Args": ["sender_1","logistics_1","destination_1", "volume", "sender_employee", "driver" ]
                },
                "secureContext": "sender",
                "attributes": ["create"]
            },
            "id": 3
        }),
    })*/
    return {
        id: id,
        sender: sender,
        logistics: logistics,
        destination: destination,
        volume: volume,
        sender_employee: "sender_employee",
        driver: driver,
        timestamp: "timestamp_3"
    }
}