import React, { useState } from "react";
import { useRecompensaContext } from "../context/RecompensaContext";

export default function ModalRecompensa({ isOpen, onClose, recompensaIndex, }: { isOpen: boolean; onClose: () => void; recompensaIndex: number | null; }) {
    const { recompensas, putRecompensa } = useRecompensaContext()
    const [editedRecompensa, setEditedRecompensa] = useState(recompensas[recompensaIndex || 0] || {})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setEditedRecompensa((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (recompensaIndex !== null) {
            putRecompensa(recompensaIndex, editedRecompensa)
        }
        onClose()
    }

    if (!isOpen || recompensaIndex === null) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Editar Recompensa</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="nm_recompensa" value={editedRecompensa.nm_recompensa || ""} onChange={handleChange} placeholder="Nome da Recompensa" className="border p-2 rounded" />
                    <input type="text" name="descricao" value={editedRecompensa.descricao || ""} onChange={handleChange} placeholder="Descrição" className="border p-2 rounded" />
                    <input type="number" name="pontos_necessarios" value={editedRecompensa.pontos_necessarios || ""} onChange={handleChange} placeholder="Pontos de Recompensa" className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Salvar</button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">Cancelar</button>
            </div>
        </div>
    )
}