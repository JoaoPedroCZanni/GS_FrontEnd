import React, { useState } from "react"
import { useAtividadeContext } from "../context/AtividadeContext"

export default function ModalCadastro({ isOpen, onClose, atividadeIndex, }: { isOpen: boolean; onClose: () => void; atividadeIndex: number | null; }) {
    const { atividades, putAtividade } = useAtividadeContext()
    const [editedAtividade, setEditedAtividade] = useState(atividades[atividadeIndex || 0] || {})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setEditedAtividade((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (atividadeIndex !== null) {
            putAtividade(atividadeIndex, editedAtividade)
        }
        onClose()
    }

    if (!isOpen || atividadeIndex === null) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Editar Atividade</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="descricao" value={editedAtividade.descricao || ""} onChange={handleChange} placeholder="Descrição" className="border p-2 rounded" />
                    <input type="number" name="pontos_recompensa" value={editedAtividade.pontos_recompensa || ""} onChange={handleChange} placeholder="Pontos de Recompensa" className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Salvar</button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">Cancelar</button>
            </div>
        </div>
    )
}