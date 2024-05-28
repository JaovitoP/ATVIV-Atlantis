import React from 'react';
import  './acomodacoes.css';
function Acomodacoes(){
    return(
        <div className='is-flex is-justify-content-center'>
            <div className='buttons pt-1'>
                <button className='button is-primary is-clickable '>Cadastrar Acomodações</button>
                <button className='button is-danger is-clickable'>Excluir Acomodações</button>
            <h2 className='has-text-black'></h2>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Cama Solteiro</th>
                    <th>Cama Casal</th>
                    <th>Suíte</th>
                    <th>Climatização</th>
                    <th>Garagem</th>
                </tr>
                <tr>
                    <td>Casal Simples</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Família Simples</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Família Mais</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Família Super</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Solteiro Simples</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Solteiro Mais</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
        </table>
        </div>
        </div>
    )
}
export default Acomodacoes;