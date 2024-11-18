"use client"; 

export default function Contato() {
    return (
        <div className="flex flex-col items-center mb-6">
            <h1 className='text-center my-6 pt-2 text-[3vw] md:text-4xl lg:text-5xl font-bold'>Entre em contato conosco!</h1>
            <section className='m-5 w-full flex justify-center'>
                <form action="contato" method='get' className="flex flex-col w-[25vw] md:w-[300px] lg:w-[440px] bg-gray-200 rounded-lg p-5">
                    <fieldset className="border-none flex flex-col">
                        <legend className="p-4 text-2xl font-bold text-center">Dados Pessoais</legend>
                        <label className="pt-2 pb-2 block">
                            <input type="text" name="nome" id="idnome" placeholder='Insira seu nome' className="text-lg w-full p-1 rounded-md border-none" />
                        </label>
                        <label className="pt-2 pb-2 block">
                            <input type="text" name='email' id='idemail' placeholder='Insira seu email' className="text-lg w-full p-1 rounded-md border-none" />
                        </label>
                        <label className="pt-2 pb-2 block">
                            <textarea name="mensagem" id="idmensagem" cols={30} rows={10} placeholder='Deixe sua mensagem!' className="text-lg w-full p-1 rounded-md border-none"></textarea>
                        </label>
                    </fieldset>
                    <button type='submit' value={"Enviar"} className="mt-4 mb-6 text-xl p-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white cursor-pointer">Enviar</button>
                </form>
            </section>
        </div>
    );
}
