import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Client";

export default function Home() {

  const clientes =  [
    new Cliente('Ana', 24, '1'),
    new Cliente('Thaisa', 27, '2'),
    new Cliente('Pamela', 54, '3'),
    new Cliente('Jessica', 34, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ...`,cliente.nome);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
    
  )
}
