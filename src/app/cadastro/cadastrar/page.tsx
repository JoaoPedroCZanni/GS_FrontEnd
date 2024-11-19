export default function Cadastrar() {
    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <h1 className='text-center my-6 pt-2 text-[3vw] md:text-4xl lg:text-5xl font-bold'>Cadastre seu Usuário!</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form className="flex flex-col w-[25vw] md:w-[300px] lg:w-[440px] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações do Usuário</legend>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="cpf" id="idcpf" placeholder='Insira seu CPF' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='nome' id='idnome' placeholder='Insira seu nome' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='email' id='idemail' placeholder='Insira seu email' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='senha' id='idsenha' placeholder='Insira sua senha' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='cep' id='idcep' placeholder='Insira seu CEP' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <select name="formaPagamento" id="idFormaPagamento" className="text-lg w-full p-2 rounded-md border-none">
                                    <option value="">Selecione a forma de pagamento</option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                    <option value="boleto">Boleto</option>
                                    <option value="pix">Pix</option>
                                </select>
                            </label>
                            <label className="pt-2 pb-2 block">
                                <select name="statusPagamento" id="idStatusPagamento" className="text-lg w-full p-2 rounded-md border-none">
                                    <option value="">Selecione o status do pagamento</option>
                                    <option value="pendente">Pendente</option>
                                    <option value="pago">Pago</option>
                                </select>
                            </label>
                        </fieldset>
                        <button type='submit' className="mt-4 mb-6 text-xl p-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white cursor-pointer">Enviar</button>
                    </form>
                </section>
            </div>
        </div>
    );
}