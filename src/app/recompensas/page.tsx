"use client"
import { useRecompensaContext } from "../context/RecompensaContext"
import { useState } from "react"
import ModalRecompensa from "../components/ModalRecompensa"
import Link from "next/link"

export default function Atividades() {
    const { recompensas, removeRecompensa } = useRecompensaContext()
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [SelectedRecompensaIndex, setSelectedRecompensaIndex] = useState<number | null>(null)

    const handleEdit = (id: number) => {
        const recompensaIndex = recompensas.findIndex((recompensa) => recompensa.id === id)
        if (recompensaIndex !== -1) {
            setSelectedRecompensaIndex(recompensaIndex)
            setIsEditOpen(true)
        }
    }
    
    return(
        <div className="flex flex-col items-center">

            <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Recompensas</h1>

            {recompensas.length > 0 ? (
                <table className="table-auto border-collapse border border-gray-400 my-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Nome</th>
                            <th className="border border-gray-400 px-4 py-2">Descrição</th>
                            <th className="border border-gray-400 px-4 py-2">Pontos de Recompensa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recompensas.map((recompensa, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{recompensa.nm_recompensa}</td>
                                <td className="border border-gray-400 px-4 py-2">{recompensa.descricao}</td>
                                <td className="border border-gray-400 px-4 py-2">{recompensa.pontos_necessarios}</td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => removeRecompensa(recompensa.id)} className="text-center text-lg bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-lg">Remover</button></td>
                                <td className="border border-gray-400 px-4 py-2"><button onClick={() => handleEdit (recompensa.id)} className="text-center text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-lg">Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nenhuma recompensa encontrada.</p>
            )}

            <button className="text-center text-lg bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg m-12"><Link href="/recompensas/adicionar-recompensa">Adicionar recompensa</Link></button>
            <ModalRecompensa isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} recompensaIndex={SelectedRecompensaIndex} />
        </div>
    )
}