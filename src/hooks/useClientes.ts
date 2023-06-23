import { useEffect, useState } from "react"
import Cliente from "../core/Client"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {


    // const repo: ClienteRepositorio = new ColecaoCliente()

    const { exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        // repo.obterTodos().then(clientes => {
        //   setClientes(clientes)
        //   exibirTabela('tabela')
        // })

    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
        console.log(cliente.nome);
    }

    async function excluirCliente(cliente: Cliente) {
        // await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        // await repo.salvar(cliente)
        obterTodos()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
    }
}