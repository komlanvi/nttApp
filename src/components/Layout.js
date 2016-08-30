import React from "react";
import Navbar from './Navbar';

export default class Layout extends React.Component {

  constructor() {
    super();
    //var timestamp = moment.unix(1468995137);
    //console.log(moment.unix(1468995137).format("hh:mm:ss DD/MM/YYYY"));
    /*$.ajax({
     type: "POST",
     url: "http://10.186.65.231:5000/registrar",
     data: JSON.stringify({
     "enrollId": "factory_nvp",
     "enrollSecret": "MS9qrN8hFjlE"
     }),
     success: (data, status) => {
     console.log("Codice: " +status);
     },
     dataType: "json",
     contentType: "application/json"
     });*/
  }

  render() {
    return (
        <div>
          <Navbar />
          <div className="container">
            <div className="starter-template">
              <img style={{width: 200+"px", height: 80 +"px"}} src="./nttdata.png" alt=""/> <h1>Hyperledger</h1>
            </div>
            {this.props.children}
          </div>
        </div>
    )
  }
}