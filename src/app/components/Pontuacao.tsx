"use client";
import { usePontuacaoContext } from "../context/PontuacaoContext";

export default function Pontuacao() {
  const { pontuacao } = usePontuacaoContext();

  return (
    <div className="absolute top-[65px] left-4 bg-green-800 text-white font-bold mt-12 py-2 px-4 rounded-lg shadow-lg">
      Pontos: {pontuacao}
    </div>
  );
}
