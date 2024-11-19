"use client"
import { Toaster, toast } from "react-hot-toast";

export default function AdicionarRecompensa() {
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement
    const nomeRecompensa = form.nomeRecompensa.value.trim()
    const descricao = form.descricao.value.trim()
    const pontosNecessarios = form.pontosNecessarios.value.trim()

    if (!nomeRecompensa || !descricao || !pontosNecessarios){
       toast.error("Por favor, preencha todos os campos.")
       return; 
    }

    toast.success("Recompensa adicionada com sucesso!")
    form.reset()
}

    return(
        <div>
            <div className="flex flex-col items-center mb-6">
                <Toaster position="bottom-center" reverseOrder={false} />
                <h1 className='text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Adicione uma Recompensa</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form
                    onSubmit={handleSubmit} 
                    className="flex flex-col w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações da Recompensa</legend>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="nomeRecompensa" id="idnomeRecompensa" placeholder='Insira o nome da recompensa' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="descricao" id="iddescricao" placeholder='Insira a descrição da recompensa' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name="pontosNecessarios" id="idpontosNecessarios" placeholder='Insira os pontos necessários' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                        </fieldset>
                        <button type="submit" className="text-center text-lg bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg m-12">Adicionar recompensa</button>
                    </form>
                </section>
            </div>
        </div>
    )
}