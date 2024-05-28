import React, { useState } from 'react';
function Clientes(props){
    return(
        <div className='is-flex is-justify-content-center buttons'>
        <div className='buttons pt-1'>
            <button className='button is-primary is-clickable ' onClick={(e) => props.seletorView('cadastroCliente', e)}>Cadastrar Cliente</button>
            <button className='button is-info is-clickable' onClick={(e) => props.seletorView('editarCliente', e)}>Editar Cliente</button>
            <button className='button is-warning is-clickable' onClick={(e) => props.seletorView('listagemCliente', e)}>Listar Clientes</button>
        </div>
    </div>
    )
}
export default Clientes;