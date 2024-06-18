import React from 'react';
import  './acomodacoes.css';
function Acomodacoes(){
    return(
        <div className='is-flex is-justify-content-center'>
            <div className='buttons pt-1'>
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
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Sim</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Família Simples</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Sim</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Família Mais</td>
                    <td>5</td>
                    <td>1</td>
                    <td>2</td>
                    <td>Sim</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Família Super</td>
                    <td>6</td>
                    <td>2</td>
                    <td>3</td>
                    <td>Sim</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Solteiro Simples</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>Sim</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Solteiro Mais</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Sim</td>
                    <td>1</td>
                </tr>
        </table>
        </div>
        </div>
    )
}
export default Acomodacoes;