// import Cliente from "../../core/Client";
// import ClienteRepositorio from "../../core/ClienteRepositorio";
// import { QueryDocumentSnapshot, SnapshotOptions, collection, doc, query } from "firebase/firestore";

// export default class ColecaoCliente implements ClienteRepositorio {

//     #conversor = {
//         toFirestore(cliente: Cliente){
//             return {
//                 nome: cliente.nome,
//                 idade: cliente.idade
//             }
//         },
//         fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions):Cliente {
//             const dados = snapshot.data(options)
//             return new Cliente(dados.nome, dados.idade, snapshot?.id)
//         }
//     }

//     async salvar(cliente: Cliente): Promise<Cliente> {
//         if(cliente?.id) {
//            await this.#colecao.doc(cliente.id).set(cliente)
//            return cliente
//         } else {
//             const docRef = await this.#colecao().add(cliente)
//             const doc = await docRef.get()
//             return doc.data()
//         }
//     }

//     excluir(cliente: Cliente): Promise<void> {
//        return this.#colecao().doc(cliente.id).delete() 

//     }

//     obterTodos(): Promise<Cliente[]> {
//         const queryawait = await this.#colecao.get()
//        return query.docs.map(doc => doc.data()) ?? []  
//     }

//     #colecao() {
//         return collection('clientes').withConverter(this.#conversor)
//     }
// }