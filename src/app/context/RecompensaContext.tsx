"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Recompensa = {
    id: number;
    nm_recompensa: string;
    descricao: string;
    pontos_necessarios: number;
}

type RecompensaContextType = {
    recompensas: Recompensa[];
    addRecompensa: (recompensa: Omit<Recompensa, "id">) => void;
    removeRecompensa: (id: number) => void;
    putRecompensa: (id: number, recompensa: Recompensa) => void;
}

const RecompensaContext = createContext<RecompensaContextType | undefined>(undefined);

export const RecompensaProvider = ({ children }: { children: ReactNode }) => {
    const [recompensas, setRecompensas] = useState<Recompensa[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    useEffect(() => {
        const storedRecompensas = localStorage.getItem("recompensas");
        if (storedRecompensas) {
            const parsedRecompensas = JSON.parse(storedRecompensas) as Recompensa[];
            setRecompensas(parsedRecompensas);

            const maiorId = parsedRecompensas.length > 0 ? Math.max(...parsedRecompensas.map(a => a.id)) : 0;
            setNextId(maiorId + 1);
        }
    }, [])

    const addRecompensa = (recompensa: Omit<Recompensa, "id">) => {
        const novaRecompensa: Recompensa = { id: nextId, ...recompensa };
        const updatedRecompensas = [...recompensas, novaRecompensa];
        setRecompensas(updatedRecompensas);

        setNextId(nextId + 1);

        localStorage.setItem("recompensas", JSON.stringify(updatedRecompensas));
    }

    const putRecompensa = (index: number, updatedRecompensa: Recompensa) => {
        setRecompensas((prevRecompensas) =>
            prevRecompensas.map((recompensa, i) => (i === index ? updatedRecompensa : recompensa))
        );

        localStorage.setItem("recompensas", JSON.stringify(recompensas));
    }

    const removeRecompensa = (id: number) => {
        const updatedRecompensas = recompensas.filter((recompensa) => recompensa.id !== id);
        setRecompensas(updatedRecompensas);

        localStorage.setItem("recompensas", JSON.stringify(updatedRecompensas));
    }

    return (
        <RecompensaContext.Provider value={{ recompensas, addRecompensa, removeRecompensa, putRecompensa }}>
            {children}
        </RecompensaContext.Provider>
    )
}

export const useRecompensaContext = () => {
    const context = useContext(RecompensaContext);
    if (!context) {
        throw new Error("useRecompensaContext deve ser usado dentro de um RecompensaProvider");
    }
    return context;
}