import React from 'react';
import './usuarioComponente.css';
import logo from './download.png'

function UsuarioCard({ name, handle }) {
  return (
    <div className="card">
      <img
        src={logo}
        />
      <div className="info">
        <h4>{name}</h4>
        <p>{handle}</p>
      </div>
    </div>
  );
}

export default UsuarioCard;