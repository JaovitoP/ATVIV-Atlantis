import React from 'react';
function CadastroCliente(){
    return(
        <div className='column is-half  is-centered'>
            <h1 className='has-text-black'>Cadastro de Clientes</h1>
            <label>Nome Completo</label>
            <input class="input" type="text" placeholder="Nome Completo" />
            <label>Nome Social</label>
            <input class="input" type="text" placeholder="Nome Social" />
            <label>Data de Nascimento</label>
            <input class="input" type="text" placeholder="Data de Nascimento" />
            <label>RG</label>
            <input class="input" type="text" placeholder=">RG" />
            <h2>Dependentes</h2>
            <label>Nome Completo</label>
            <input class="input" type="text" placeholder="Nome Completo" />
        </div>
    )
}
export default CadastroCliente;