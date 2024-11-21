"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PontuacaoContextType = {
  pontuacao: number;
  adicionarPontos: (valor: number) => void;
  removerPontos: (valor: number) => void;
};

const PontuacaoContext = createContext<PontuacaoContextType | undefined>(undefined);

export const PontuacaoProvider = ({ children }: { children: ReactNode }) => {
  const [pontuacao, setPontuacao] = useState<number>(0);

  const adicionarPontos = (valor: number) => setPontuacao((prev) => prev + valor);
  const removerPontos = (valor: number) => setPontuacao((prev) => Math.max(prev - valor, 0));

  return (
    <PontuacaoContext.Provider value={{ pontuacao, adicionarPontos, removerPontos }}>
      {children}
    </PontuacaoContext.Provider>
  );
};

export const usePontuacaoContext = () => {
  const context = useContext(PontuacaoContext);
  if (!context) {
    throw new Error("usePontuacaoContext deve ser usado dentro de um PontuacaoProvider");
  }
  return context;
};
