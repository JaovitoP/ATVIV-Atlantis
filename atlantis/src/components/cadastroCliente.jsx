import React from 'react';
function CadastroCliente(){
    return(
        <div className='container has-background-link-light'>
            <h1 className='has-text-black has-text-centered'>Cadastro de Clientes</h1>
            <div className='columns'>
                <div className='column p-6'>
                    <h2 className='has-text-centered'>Dados Pessoais</h2>
                    <label>Nome Completo</label>
                    <input class="input" type="text" placeholder="Nome Completo" />
                    <label>Nome Social</label>
                    <input class="input" type="text" placeholder="Nome Social" />
                    <label>Data de Nascimento</label>
                    <input class="input" type="text" placeholder="Data de Nascimento" />
                    <label>RG</label>
                    <input class="input" type="text" placeholder="RG" />
                    <label>Telefone</label>
                    <input class="input" type="text" placeholder="Telefone" />
                </div>
                <div className='column p-6 '>
                    <h2 className='has-text-centered'>Endereço</h2>
                    <label>Rua</label>
                    <input class="input" type="text" placeholder="Rua" />
                    <label>CEP</label>
                    <input class="input" type="text" placeholder="CEP" />
                    <label>Cidade</label>
                    <input class="input" type="text" placeholder="Cidade" />
                    <label>Estado</label>
                    <input class="input" type="text" placeholder="Estado" />
                    <label>País</label>
                    <input class="input" type="text" placeholder="País" />
                    <label>Código Postal</label>
                    <input class="input" type="text" placeholder="Código Postal" />
                </div>
            </div>
        </div>
    )
}
export default CadastroCliente;