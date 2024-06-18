import { useState } from "react";
import Home from "./home";
import Clientes from "./clientes";
import Hospedagem from "./hospedagem";
import Acomodacoes from "./acomodacoes";
import CadastroCliente from "./cadastroCliente";
import CadastroDependente from "./cadastroDependente";
import CadastroHospedagem from "./cadastroHospedagem";
import Menu from "./menu";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const selecionarView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
        console.log(valor);
    };

    const botoes = ['Home', 'Clientes', 'Hospedagem', 'Acomodações', 'CadastroCliente', 'CadastroDependente', 'listagemClientes', 'CadastroHospedagem'];

    const construirView = () => {
        switch (tela) {
            case 'CadastroCliente':
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <CadastroCliente setTela={setTela} />
                    </>
                );
            case 'Clientes':
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Clientes seletorView={selecionarView} />
                    </>
                );
                case 'CadastroHospedagem':
                    return (
                        <>
                            <Menu seletorView={selecionarView} botoes={botoes} />
                            <CadastroHospedagem setTela={setTela} />
                        </>
                        );
            case 'Hospedagem':
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Hospedagem setTela={setTela} />
                    </>
                );
            case 'CadastroDependente':
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <CadastroDependente setTela={setTela} />
                    </>
                );

            case 'Home':
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Home setTela={setTela} />
                    </>
                );
            default:
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Acomodacoes setTela={setTela} />
                    </>
                );
        }
    };

    return construirView();
}
