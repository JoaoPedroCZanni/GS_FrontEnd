"use client"
import { Toaster, toast } from "react-hot-toast";

export default function Cadastrar() {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const form = e.target as HTMLFormElement
    const cpf = form.cpf.value.trim()
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const senha = form.senha.value.trim()
    const cep = form.cep.value.trim()
    const formaPagamento = form.formaPagamento.value.trim()
    const statusPagamento = form.statusPagamento.value.trim()

    if (!cpf || !nome || !email || !senha || !cep || !formaPagamento || !statusPagamento) {
        toast.error("Por favor, preencha todos os campos.")
        return;
    }

    if (cpf.length !== 11) {
        toast.error("Por favor, insira apenas os 11 números do CPF.")
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Por favor, insira um email válido.")
        return;
    };

    if (senha.length < 8) {
        toast.error("Por favor, insira uma senha com pelo menos 8 caracteres.")
        return;
    };

    if (cep.length !== 8) {
        toast.error("Por favor, insira apenas os 8 números do CEP.")
        return;
    };

    toast.success("Usuário cadastrado com sucesso!")
    form.reset()
}

    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <Toaster position="bottom-center" reverseOrder={false} />
                <h1 className='text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Cadastre seu Usuário!</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-gray-200 rounded-lg p-5">
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
                                <input type="password" name='senha' id='idsenha' placeholder='Insira sua senha' className="text-lg w-full p-1 rounded-md border-none" />
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