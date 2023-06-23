import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Client";

export default function Home() {

  const [visivel, setVisivel] =useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] =useState<Cliente>(Cliente.vazio())

  const clientes =  [
    new Cliente('Ana', 24, '1'),
    new Cliente('Thaisa', 27, '2'),
    new Cliente('Pamela', 54, '3'),
    new Cliente('Jessica', 34, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ...`,cliente.nome);
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
              <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              ></Tabela> 
          </>
        ): (
            <Formulario cliente={cliente} 
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}></Formulario>
        )}
      </Layout>
    </div>
    
  )
}
