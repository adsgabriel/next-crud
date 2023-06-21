import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Client";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente :Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto='Código' 
                valor={id}
                className="mb-4"></Entrada>
            ): false}
            <Entrada 
                valorMudou={setNome}
                texto='Nome' 
                valor={nome}
                className="mb-4"></Entrada>
            <Entrada 
                valorMudou={setIdade}
                texto='Idade' 
                tipo="number" 
                valor={idade}></Entrada>
                <div className=" flex justify-end mt-7">
                    <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id)) }>
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao onClick={props.cancelado}>
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}