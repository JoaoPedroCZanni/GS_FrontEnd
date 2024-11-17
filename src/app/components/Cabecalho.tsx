import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <header className="bg-green-600 min-h-20 p-5 flex justify-evenly items-center">
            <div className='flex flex-row justify-center items-center gap-8'>
            <a href="/"><h1 className='text-2xl sm:text-4xl text-white font-semibold'>GREEN CHANGE</h1></a>
            </div>
             <Menu/>
        </header>
    )
}