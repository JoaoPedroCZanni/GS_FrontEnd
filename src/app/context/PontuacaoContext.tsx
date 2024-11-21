"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PontosContextType = {
  pontos: number;
  adicionarPontos: (valor: number) => void;
  removerPontos: (valor: number) => void;
};

const PontosContext = createContext<PontosContextType | undefined>(undefined);

export const PontosProvider = ({ children }: { children: ReactNode }) => {
  const [pontos, setPontos] = useState<number>(0);

  const adicionarPontos = (valor: number) => setPontos((prev) => prev + valor);
  const removerPontos = (valor: number) => setPontos((prev) => Math.max(prev - valor, 0));

  return (
    <PontosContext.Provider value={{ pontos, adicionarPontos, removerPontos }}>
      {children}
    </PontosContext.Provider>
  );
};

export const usePontosContext = () => {
  const context = useContext(PontosContext);
  if (!context) {
    throw new Error("usePontosContext must be used within a PontosProvider");
  }
  return context;
};
