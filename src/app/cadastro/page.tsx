"use client"
import { useUserContext } from "./../context/UserContext"
import { useState } from "react";
import ModalCadastro from "../components/ModalCadastro";

export default function Cadastro() {
    const { users, removeUser } = useUserContext();
    const [isEditOpen, setEditOpen] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);

    const handleEdit = (cpf: string) =>{
        const userIndex = users.findIndex((user) => user.cpf === cpf);
        if (userIndex !== -1) {
            setSelectedUserIndex(userIndex);
            setEditOpen(true);
        }
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Cadastre-se!</h1>
            
            {users.length > 0 ? (
                <table className="table-auto border-collapse border border-gray-400 my-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">CPF</th>
                            <th className="border border-gray-400 px-4 py-2">Nome</th>
                            <th className="border border-gray-400 px-4 py-2">Email</th>
                            <th className="border border-gray-400 px-4 py-2">Senha</th>
                            <th className="border border-gray-400 px-4 py-2">CEP</th>
                            <th className="border border-gray-400 px-4 py-2">Forma de Pagamento</th>
                            <th className="border border-gray-400 px-4 py-2">Status de Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{user.cpf}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.nome}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.senha}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.cep}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.formaPagamento}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.statusPagamento}</td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => removeUser(user.cpf)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Excluir</button></td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => handleEdit(user.cpf)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500 my-6">Nenhum usuário cadastrado.</p>
            )}
            <button className="text-center text-lg bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg m-12"><a href="/cadastro/cadastrar">Adicionar cadastro</a></button>
            <ModalCadastro isOpen={isEditOpen} onClose={() => setEditOpen(false)} userIndex={selectedUserIndex} />
        </div>
    )
}