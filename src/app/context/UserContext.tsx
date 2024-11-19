"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
    removeUser: (cpf: string) => void
    putUser: (index: number, updatedUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const storedUsers = localStorage.getItem('users')
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
    }, [])

    const addUser = (user: User) => {
        const updatedUsers = [...users, user]
        setUsers(updatedUsers)
        localStorage.setItem('users', JSON.stringify(updatedUsers))
    }

    const putUser = (index: number, updatedUser: User) => {
        setUsers((prevUsers) => 
            prevUsers.map((user, i) => (i === index ? updatedUser : user))
        )
    }

    const removeUser = (cpf: string) => {
        const updatedUsers = users.filter((user) => user.cpf !== cpf)
        setUsers(updatedUsers)
        localStorage.setItem('users', JSON.stringify(updatedUsers))
    }

    return(
        <UserContext.Provider value={{ users, addUser, putUser, removeUser }}>
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