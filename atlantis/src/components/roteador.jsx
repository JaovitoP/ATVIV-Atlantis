import { useState } from "react";
import Home from "./home";
import Clientes from "./clientes";
import Hospedagem from "./hospedagem";
import Acomodacoes from "./acomodacoes";
import CadastroCliente from "./cadastroCliente";
import Menu from "./menu";

export default function Roteador(){
    const [tela, setTela] = useState('CadastroCliente')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
        
    }
    const botoes = ['Home', 'Clientes', 'Hospedagem', 'Acomodações', 'CadastroCliente'];
    const construirView = () => {
        if (tela === 'Home') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Home setTela={setTela}/>
                </>
            )
        } else if (tela == 'Clientes') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Clientes setTela={setTela}/>
                </>
            )
        } else if (tela == 'Hospedagem') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Hospedagem setTela={setTela}/>
                </>
            )
        } else if (tela == 'CadastroCliente') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <CadastroCliente setTela={setTela}/>
                </>
            )
        } else {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Acomodacoes setTela={setTela}/>
                </>
            )
        }

    }

    return (
        construirView()
    )
}