"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Atividade = {
    id: number;
    descricao: string;
    pontos_recompensa: number;
};

type AtividadeContextType = {
    atividades: Atividade[];
    addAtividade: (atividade: Omit<Atividade, "id">) => void;
    removeAtividade: (id: number) => void;
    putAtividade: (index: number, updatedAtividade: Atividade) => void;
};

const AtividadeContext = createContext<AtividadeContextType | undefined>(undefined);

export const AtividadeProvider = ({ children }: { children: ReactNode }) => {
    const [atividades, setAtividades] = useState<Atividade[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    useEffect(() => {
        const storedAtividades = localStorage.getItem("atividades");
        if (storedAtividades) {
            const parsedAtividades = JSON.parse(storedAtividades) as Atividade[];
            setAtividades(parsedAtividades);

            const maiorId = parsedAtividades.length > 0 ? Math.max(...parsedAtividades.map(a => a.id)) : 0;
            setNextId(maiorId + 1);
        }
    }, []);

    const addAtividade = (atividade: Omit<Atividade, "id">) => {
        const novaAtividade: Atividade = { id: nextId, ...atividade };
        const updatedAtividades = [...atividades, novaAtividade];
        setAtividades(updatedAtividades);

        setNextId(nextId + 1);

        localStorage.setItem("atividades", JSON.stringify(updatedAtividades));
    };

    const putAtividade = (index: number, updatedAtividade: Atividade) => {
        setAtividades((prevAtividades) =>
            prevAtividades.map((atividade, i) => (i === index ? updatedAtividade : atividade))
        );

        localStorage.setItem("atividades", JSON.stringify(atividades));
    };

    const removeAtividade = (id: number) => {
        const updatedAtividades = atividades.filter((atividade) => atividade.id !== id);
        setAtividades(updatedAtividades);

        localStorage.setItem("atividades", JSON.stringify(updatedAtividades));
    };

    return (
        <AtividadeContext.Provider value={{ atividades, addAtividade, putAtividade, removeAtividade }}>
            {children}
        </AtividadeContext.Provider>
    );
};

export const useAtividadeContext = () => {
    const context = useContext(AtividadeContext);
    if (!context) {
        throw new Error("useAtividadeContext deve ser usado dentro de um AtividadeProvider");
    }
    return context;
};
