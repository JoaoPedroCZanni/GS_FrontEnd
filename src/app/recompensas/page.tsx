export default function Atividades() {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Atividades</h1>

            <button className="text-center text-lg bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg m-12"><a href="/recompensas/adicionar-recompensa">Adicionar recompensa</a></button>
        </div>
    )
}