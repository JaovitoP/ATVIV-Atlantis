import React, { useState } from 'react';
function Clientes(props){
    return(
        <div className='is-flex is-justify-content-center buttons'>
        <h1 className='has-text-black'>Bem-vindo ao Atlantis! Mergulhe em um mundo de diversão com toboáguas emocionantes e piscinas relaxantes, perfeito para todas as idades. Venha viver aventuras inesquecíveis conosco!</h1>
        <div className='buttons'>
            <button className='button is-primary is-clickable ' onClick={(e) => props.seletorView('cadastroCliente', e)}>Cadastrar Cliente</button>
            <button className='button is-primary is-clickable' onClick={(e) => props.seletorView('editarCliente', e)}>Editar Cliente</button>
            <button className='button is-primary is-clickable' onClick={(e) => props.seletorView('listagemCliente', e)}>Listar Clientes</button>
        </div>
    </div>
    )
}
export default Clientes;