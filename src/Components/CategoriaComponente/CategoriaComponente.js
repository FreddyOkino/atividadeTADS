import React from "react";
import UsuarioCard from "../UsuarioComponente/usuarioComponentes";
import './CategoriaComponente.css'

function Categoria({title, users,logo}){
    return(
        <div className="categoria">
            <div className="header">
            <img src={logo} className="categoria-logo"/>
            <h3>{title}</h3>

            </div>
            {users?.map((user,index)=>(
                <UsuarioCard key={index} name={user.name} handle={user.handle}/>
            ))

            }
        </div>
    )
}

export default Categoria;