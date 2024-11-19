import React, { useState } from 'react';
import { useUserContext } from "../context/UserContext"

export default function ModalCadastro({ isOpen, onClose, userIndex, }: { isOpen: boolean; onClose: () => void; userIndex: number | null; }) {
    const { users, putUser } = useUserContext()
    const [editedUser, setEditedUser] = useState(users[userIndex || 0] || {})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setEditedUser((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userIndex !== null) {
            putUser(userIndex, editedUser)
        }
        onClose()
    }

    if (!isOpen || userIndex === null) return null;
    
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Editar Usuário</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="cpf" value={editedUser.cpf || ""} onChange={handleChange} placeholder="CPF" className="border p-2 rounded" />
            <input type="text" name="nome" value={editedUser.nome || ""} onChange={handleChange} placeholder="Nome" className="border p-2 rounded" />
            <input type="email" name="email" value={editedUser.email || ""} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
            <input type="password" name="senha" value={editedUser.senha || ""} onChange={handleChange} placeholder="Senha" className="border p-2 rounded" />
            <input type="text" name="cep" value={editedUser.cep || ""} onChange={handleChange} placeholder="CEP" className="border p-2 rounded" />
            <select name="formaPagamento" value={editedUser.formaPagamento || ""} onChange={handleChange} className="border p-2 rounded">
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
              <option value="boleto">Boleto</option>
              <option value="pix">Pix</option>
            </select>
            <select name="statusPagamento" value={editedUser.statusPagamento || ""} onChange={handleChange} className="border p-2 rounded">
              <option value="pendente">Pendente</option>
              <option value="pago">Pago</option>
            </select>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Salvar
            </button>
          </form>
          <button onClick={onClose} className="mt-4 text-red-500">Cancelar</button>
        </div>
      </div>
    );

}