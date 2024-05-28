import React, { useState } from 'react';
function Clientes(props){
    return(
        <div className='is-flex is-justify-content-center'>
        <div className='buttons pt-1'>
            <button className='button is-primary is-clickable '>Cadastrar Cliente</button>
            <button className='button is-info is-clickable'>Editar Cliente</button>
            <button className='button is-danger is-clickable'>Excluir Cliente</button>
            <table>
                <tr>
                    <th>Clientes</th>
                </tr>
                <tr>
                    <td>Simão Valter Neves</td>
                </tr>
                <tr>
                    <td>Karin Samila Camacho Galhardo Bahia</td>
                </tr>
                <tr>
                    <td>Josefina Galvão</td>
                </tr>
                <tr>
                    <td>Gilmar Joel de Carmona Neto</td>
                </tr>
                <tr>
                    <td>Lina Nair Quintana Franco</td>
                </tr>
            </table>
        </div>
    </div>
    )
}
export default Clientes;