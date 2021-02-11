import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  InfoBox,
} from "@react-google-maps/api";
import queryParams from "query-string";
import { Link, BrowserRouter as Route } from "react-router-dom";
import Barra from "./../components/AppBar";
// import {Msimples} from "../components/MapSimpleComponet";

export default class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: true,
      travelMode: "DRIVING",
      origin: ` `,
      destination: ``,
    };

    this.directionsCallback = this.directionsCallback.bind(this);
  }

  componentDidMount() {
    // const origDist = [{ origin: 26021070, destino: 26022670 }];
    const values = /* origDist */ queryParams.parse(this.props.location.search);
    this.setState({
      /*       origin: `26021070 `,
      destination: `26022670`, */
      origin: `${values.origem} `,
      destination: `${values.destino}`,
    });
  }

  directionsCallback(response) {
    if (response !== null) {
      if (response.status === "OK") {
        this.setState(() => ({
          response,
        }));
      }
    }
  }

  render() {
    return (
      <div className="mapa-container">
        <Barra />
        <header>
          <Link className="back-link" to="/">
            Home
          </Link>
        </header>
        <div className="map-container">
          <LoadScript
            id="script-loader"
            googleMapsApiKey=""
          >
            <GoogleMap
              id="direction-example"
              mapContainerStyle={{
                height: "100vh",
                width: "100%",
              }}
              zoom={3}
              center={{
                lat: -22.9552549,
                lng: -43.1669116,
              }}
            >
              {this.state.destination !== "" && this.state.origin !== "" && (
                <DirectionsService
                  options={{
                    destination: this.state.destination,
                    origin: this.state.origin,
                    travelMode: this.state.travelMode,
                  }}
                  callback={this.directionsCallback}
                />
              )}

              {this.state.response !== null && (
                <DirectionsRenderer
                  options={{
                    directions: this.state.response,
                  }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}
