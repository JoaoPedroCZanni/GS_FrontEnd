"use client"
import { Toaster, toast } from "react-hot-toast";
import { useAtividadeContext } from "../../context/AtividadeContext"
import { TipoAtividade } from "../../types"
import { useEffect, useState } from "react"

export default function AdicionarAtividade() {
const [atividades, setAtividades] = useState<TipoAtividade[]>([])
const { addAtividade } = useAtividadeContext()

const consumindoApiAtividades = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/base-atividades')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setAtividades(data)
    } catch (error) {
        console.log("Erro ao buscar atividades:", error)
    }
}

useEffect(() => {
    consumindoApiAtividades()
}, [])

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const descricao = form.descricao.value.trim();
    const pontos_recompensa = form.pontos_recompensa.value.trim();

    if (!descricao || !pontos_recompensa) {
        toast.error("Por favor, preencha todos os campos.");
        return;
    }

    if (Number(pontos_recompensa) <= 0) {
        toast.error("Por favor, insira um valor maior que zero.");
        return;
    }

    // Chamar addAtividade sem precisar do ID
    addAtividade({ descricao, pontos_recompensa: Number(pontos_recompensa) });
    toast.success("Atividade adicionada com sucesso!");
    form.reset();
};


    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <Toaster position="bottom-center" reverseOrder={false} />
                <h1 className='text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Adicione uma Atividade</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form
                    onSubmit={handleSubmit} 
                    className="flex flex-col w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações da Atividade</legend>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="descricao" id="iddescricao" placeholder='Insira a descrição da atividade' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name='pontos_recompensa' id='idpontos' placeholder='Insira o valor de pontos dessa atividade' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                        </fieldset>
                        <button type='submit' className="mt-4 mb-6 text-xl p-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white cursor-pointer">Enviar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}