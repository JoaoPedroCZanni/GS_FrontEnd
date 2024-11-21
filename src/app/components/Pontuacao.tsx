"use client";
import { usePontosContext } from "../context/PontuacaoContext";

export default function PontosHeader() {
  const { pontos } = usePontosContext();

  return (
    <div className="fixed top-4 right-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
      Pontos: {pontos}
    </div>
  );
}
