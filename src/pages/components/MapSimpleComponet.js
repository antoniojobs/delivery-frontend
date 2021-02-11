import React, { memo, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./MAKER.css";

function MyComponent() {
  const [construtorRotas, setConstrutorRotas] = useState({
    response: null,
    travelMode: "DRIVING",
    origin: "",
    destination: "",
  });
  /*   const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState(""); */
  /* ==========serviço de rotas========= */
  /*   useEffect(() => {
    if (inicio !== "" && fim !== "") {
      setConstrutorRotas(() => ({
        origin: inicio.value,
        destination: fim.value,
      }));
    }
  }, [inicio, fim]); */

  /* function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 },
    });
    directionsRenderer.setMap(map);

    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document
      .getElementById("start")
      .addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
      {
        origin: {
          query: document.getElementById("start").value,
        },
        destination: {
          query: document.getElementById("end").value,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  } */

  /* ================================== */

  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
  };
  const mapContainerStyle = {
    margin: "20px",
    width: "90%",
    height: "400px",
  };
  const defaultCenter = {
    lat: -22.72824997877891,
    lng: -43.44675248270905,
    /*     lat: 41.3851,
    lng: 2.1734, */
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  const position = {
    lat: -22.72824997877891,
    lng: -43.44675248270905,
  };
  const position2 = {
    lat: -22.729,
    lng: -43.447,
  };
  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.4,
        lng: 2.5,
      },
    },
  ];

  // function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDmOL4IfUCQAO1zD7TFjzsge0oGYdABrfM">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={defaultCenter}
      >
        {/*  {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onLoad={onLoad}
              position={position}
            />
          );
        })} */}
        {/*         <Marker
          key={locations[0].name}
          position={locations[0].location}
          onLoad={onLoad}
          position={position}
        /> */}
        <Marker
          key={locations[0].name}
          id={1}
          label={"Marcos Vilela"}
          title={locations[0].name}
          position={locations[0].location}
          onLoad={onLoad}
          onClick={(e) =>
            onSelect((e) => {
              alert(locations[0].name);
            })
          }
        />
        {/*         <Marker
          id={2}
          label={"B"}
          title={locations[1].name}
          id={1}
          key={locations[1].name}
          // position={locations[1].location}
          onLoad={onLoad}
          position={position2}
          onClick={(e) =>
            onSelect((e) => {
              alert(locations[1].name);
            })
          }
        /> */}
        {/* <DirectionsService
          // required
          options={{
            // eslint-disable-line react-perf/jsx-no-new-object-as-prop
            destination: this.state.destination,
            origin: this.state.origin,
            travelMode: this.state.travelMode,
          }}
          // required
          callback={this.directionsCallback}
          // optional
          onLoad={(directionsService) => {
            console.log(
              "DirectionsService onLoad directionsService: ",
              directionsService
            );
          }}
          // optional
          onUnmount={(directionsService) => {
            console.log(
              "DirectionsService onUnmount directionsService: ",
              directionsService
            );
          }}
        /> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
