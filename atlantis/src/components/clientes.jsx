import React, { useState } from 'react';
function Clientes(props){
    return(
        <div className='is-flex is-justify-content-center buttons'>
        <div className='buttons pt-1'>
            <button className='button is-primary is-clickable ' onClick={(e) => props.seletorView('cadastroCliente', e)}>Cadastrar Cliente</button>
            <button className='button is-info is-clickable' onClick={(e) => props.seletorView('editarCliente', e)}>Editar Cliente</button>
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