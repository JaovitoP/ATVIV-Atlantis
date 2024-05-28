import React from 'react';
function Hospedagem(){
    return(
        <div className='is-flex is-justify-content-center'>
        <div className='buttons pt-1'>
            <button className='button is-primary is-clickable '>Cadastrar Hospedagem</button>
            <button className='button is-danger is-clickable'>Excluir Hospedagem</button>
            <table>
                <tr>
                    <th>Clientes</th>
                    <th>Acomodação</th>
                </tr>
                <tr>
                    <td>Simão Valter Neves</td>
                    <td>Simão Valter Neves</td>
                </tr>
                <tr>
                    <td>Karin Samila Camacho Galhardo Bahia</td>
                    <td>Karin Samila Camacho Galhardo Bahia</td>
                </tr>
                <tr>
                    <td>Josefina Galvão</td>
                    <td>Josefina Galvão</td>
                </tr>
                <tr>
                    <td>Gilmar Joel de Carmona Neto</td>
                    <td>Gilmar Joel de Carmona Neto</td>
                </tr>
                <tr>
                    <td>Lina Nair Quintana Franco</td>
                    <td>Lina Nair Quintana Franco</td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default Hospedagem;