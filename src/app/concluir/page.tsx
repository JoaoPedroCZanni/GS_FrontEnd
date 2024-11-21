"use client"
import { Toaster, toast } from "react-hot-toast";
import { TipoEvidenvia } from "../types";
import { useEffect, useState } from "react";

export default function Concluir() {
    const [atividades, setAtividades] = useState<TipoEvidenvia[]>([])

    const consumindoApiAtividades = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/base-evidencias')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            setAtividades(data)
        } catch (error) {
            console.log("Erro ao buscar evidências:", error)
        }
    }

    useEffect(() => {
        consumindoApiAtividades()
    }, [])

    return (
        <div>
            <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Conclua uma Atividade!</h1>
        </div>
    )
}