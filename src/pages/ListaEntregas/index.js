import React from "react";
import "./index.css";
import Barra from "./../components/AppBar";
import Tabela from "./../components/Table";
import TabelaEntregas from "../components/TableEntregas";
// import TabelaEntrgas from './../components/Table-entregas'
// import TabelaCompleta from './../components/TableFull'
export default function ListaEntregas() {
  return (
    <>
    <Barra />
    <h2>
    <span
    style={{
      marginLeft: 10,
    }}
    >
    Listatem de entregas
    </span>
    </h2>
    <TabelaEntregas/>
    </>
    );
  }
  