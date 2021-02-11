import React, { useState, useEffect } from "react";
// import { Button /* ,ThemeProvider, createMuiTheme */} from '@material-ui/core';
import Barra from "./../components/AppBar";
import "./../../global.css";
import "./index.css";
import "./index.css";
// import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import buscaCep from "../tools/CEP";

//{captura dos valores dos inputs atraves de useState (estados)
export default function CadastroEntregas() {
  const [nome, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cepCliente, setCepCliente] = useState("");

  const [ruaPartida, setRuaPartida] = useState("");
  const [numeroPartida, setNumeroPartida] = useState("");
  const [cepPartida, setCepPartida] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [automateInputs, setAutomateInputs] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
  });
  /* ============================================================= */
  /*=======================ESTADOS FORM=========================== */

  const history = useHistory();
  const data = {
    nome,
    telefone,
    rua,
    numero,
    cepCliente,
    cepPartida,
    ruaPartida,
    numeroPartida,
    dataEntrega,
  };

  /* =================cliente============== */
  useEffect(() => {
    if (data.cepCliente.length >= 8) {
      buscaCep(data.cepCliente).then((data) => {
        setRua(data.logradouro);
      });
    }
  }, [data.cepCliente]);
 /*  useEffect(() => {
    if (data.cepCliente.length >= 8) {
      setRua(data.logradouro);
      // document.forms[0].children["rua_cli"].value = rua.logradouro;
    }
  }, [automateInputs]); */
  
  /* =================partida============== */
  useEffect(() => {
    if (data.cepPartida.length >= 8) {
      buscaCep(data.cepPartida).then((data) => {
        setRuaPartida(data.logradouro);
      });
    }
  }, [data.cepPartida]);
/*   useEffect(() => {
    if (data.cepCliente.length >= 8) {
      document.forms[0].children["rua_cli"].value = automateInputs.logradouro;
    }
  }, [automateInputs]); */
  
  //faz o cadastro de usuários
  async function handleRegister(e) {
    e.preventDefault(); //previne o recarregamento de submit
    //dados para envio a api
    const data = {
      nome,
      telefone,
      rua,
      numero,
      cepCliente,
      cepPartida,
      ruaPartida,
      numeroPartida,
      dataEntrega,
    };
    try {
      const retorno = await api.post("entrega", data);
      history.push("/");
    } catch (error) {
      return error;
    }
  }
  //}
  return (
    <div className="box-container register-container">
      {<Barra />}
      <div className="content">
        <form onSubmit={handleRegister} className="form cad">
          <h2>Cadastro de entrega </h2>
          <input
            name="CEP_cliente"
            required placeholder="CEP do cliente"
            value={cepCliente}
            onChange={(e) => setCepCliente(e.target.value)}
          />
          <input
            name="CEP_partida"
            required placeholder="CEP partida"
            value={cepPartida}
            onChange={(e) => setCepPartida(e.target.value)}
          />
          <div style={{ marginTop: "30px" }}>
            <hr />
          </div>
          <input
            name="nome_cliente"
            required placeholder="Nome do cliente"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="telefone"
            required placeholder="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            name="rua_cli"
            required placeholder="Rua do cliente"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
          <input
            name="n_rua_cliente"
            required placeholder="Número da rua cliente"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          <input
            name="n_rua_partida"
            required placeholder="Rua de partida"
            value={ruaPartida}
            onChange={(e) => setRuaPartida(e.target.value)}
          />
          <input
            required placeholder="Número da rua partida"
            value={numeroPartida}
            onChange={(e) => setNumeroPartida(e.target.value)}
          />

          <input
            name="data_entrega"
            required type="date"
            value={dataEntrega}
            onChange={(e) => setDataEntrega(e.target.value)}
          />

          <div style={{ marginTop: "50px" }}>
            <hr />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
          <Link className="back-link" to="/">
            Home
          </Link>
        </form>
      </div>
    </div>
  );
}
