import { useState } from "react";
import Home from "./home";
import Clientes from "./clientes";
import Hospedagem from "./hospedagem";
import Acomodacoes from "./acomodacoes";
import CadastroCliente from "./cadastroCliente";
import CadastroDependente from "./cadastroDependente";
import ListagemClientes from "./listagemClientes";
import Menu from "./menu";

export default function Roteador(){
    const [tela, setTela] = useState('listagemClientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
        
    }
    const botoes = ['Home', 'Clientes', 'Hospedagem', 'Acomodações', 'CadastroCliente', 'CadastroDependente', 'listagemClientes'];
    const construirView = () => {
        if (tela === 'CadastroCliente') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <CadastroCliente setTela={setTela}/>
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
        } else if (tela == 'CadastroDependente') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <CadastroDependente setTela={setTela}/>
                </>
            )
        } else if (tela == 'listagemClientes') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <ListagemClientes setTela={setTela}/>
                </>
            )
        } else if (tela == 'Home') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Home setTela={setTela}/>
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