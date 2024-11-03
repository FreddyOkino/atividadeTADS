import React from "react";
import logo from './download.png';
import './Cabecalho.css'; 

function Cabecalho({ title }) {
    return (
        <header className="cabecalho">
            <img src={logo} alt="Logo" className="cabecalho-logo" />
            <h1 className="cabecalho-titulo">{title}</h1>
        </header>
    );
}

export default Cabecalho;
