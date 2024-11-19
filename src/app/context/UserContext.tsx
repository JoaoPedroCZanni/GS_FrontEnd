"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    cep: string;
    formaPagamento: string;
    statusPagamento: string;
};

type UserContextType = {
    users: User[];
    addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([])

    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user])
    }

    return(
        <UserContext.Provider value={{ users, addUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUserContext deve ser usado dentro de um UserProvider");
    }
    return context;
}