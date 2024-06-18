import React, { useState } from 'react';
function Hospedagem(props){
    return(
        <div className='is-flex is-justify-content-center'>
        <div className='buttons pt-1'>
            <a className='button is-primary is-clickable' onClick={(e) => props.seletorView('CadastroHospedagem', e)}>Cadastrar Hospedagem</a>
            <button className='button is-danger is-clickable'>Excluir Hospedagem</button>
            <table>
                <tr>
                    <th>Clientes</th>
                    <th>Acomodação</th>
                </tr>
                <tr>
                    <td>Simão Valter Neves</td>
                    <td>Casal Simples</td>
                </tr>
                <tr>
                    <td>Karin Samila Camacho Galhardo Bahia</td>
                    <td>Família Simples</td>
                </tr>
                <tr>
                    <td>Josefina Galvão</td>
                    <td>Família Super</td>
                </tr>
                <tr>
                    <td>Gilmar Joel de Carmona Neto</td>
                    <td>Solteiro Simples</td>
                </tr>
                <tr>
                    <td>Lina Nair Quintana Franco</td>
                    <td>Casal Super</td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default Hospedagem;