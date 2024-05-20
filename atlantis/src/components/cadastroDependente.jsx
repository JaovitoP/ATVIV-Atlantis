import React from 'react';
function CadastroDependente(){
    return(
        <div className='container has-background-link-light'>
            <h1 className='has-text-black has-text-centered'>Cadastro de Dependente</h1>
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
                </div>
            </div>
        </div>
    )
}
export default CadastroDependente;