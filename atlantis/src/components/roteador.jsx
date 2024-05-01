import { useState } from "react";
import Home from "./home";
import Menu from "./menu";

export default function Roteador(){
    const [tela, setTela] = useState('Home')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
        
    }
    const botoes = ['Home', 'Clientes', 'Hospedagem', 'Acomodações'];
    const construirView = () => {
        if (tela === 'Home') {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    <Home setTela={setTela}/>
                </>
            )
        }
    }

    return (
        construirView()
    )
}