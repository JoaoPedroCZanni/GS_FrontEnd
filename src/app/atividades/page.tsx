"use client"
import { useAtividadeContext } from "../context/AtividadeContext"
import { useState } from "react"
import ModalAtividade from "../components/ModalAtividade"

export default function Atividades() {
    const { atividades, removeAtividade } = useAtividadeContext()
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [SelectedAtividadeIndex, setSelectedAtividadeIndex] = useState<number | null>(null)

    const handleEdit = (id: number) => {
        const atividadeIndex = atividades.findIndex((atividade) => atividade.id === id)
        if (atividadeIndex !== -1) {
            setSelectedAtividadeIndex(atividadeIndex)
            setIsEditOpen(true)
        }
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Atividades</h1>

            {atividades.length > 0 ? (
                <table className="table-auto border-collapse border border-gray-400 my-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Descrição</th>
                            <th className="border border-gray-400 px-4 py-2">Pontos de Recompensa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atividades.map((atividade, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{atividade.descricao}</td>
                                <td className="border border-gray-400 px-4 py-2">{atividade.pontos_recompensa}</td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => removeAtividade(atividade.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Remover</button></td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => handleEdit(atividade.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Editar</button></td>
                                <td className="border border-gray-400 px-4 py-2"><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><a href="/concluir">Concluir</a></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500 my-6">Nenhuma atividade cadastrada.</p>
            )}

            <button className="text-center text-lg bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg m-12"><a href="/atividades/adicionar-atividade">Adicionar atividade</a></button>
            <ModalAtividade isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} atividadeIndex={SelectedAtividadeIndex} />
        </div>
    )
}