"use client";
import { Toaster, toast } from "react-hot-toast";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const mensagem = form.mensagem.value.trim()

    if (!nome || !email || !mensagem) {
        toast.error("Por favor, preencha todos os campos.")
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Por favor, insira um email válido.")
        return;
  };

  toast.success("Mensagem enviada com sucesso!")
  form.reset()
}

  return (
    <div className="flex flex-col items-center mb-6">
      <Toaster position="bottom-center" reverseOrder={false} />
      <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Entre em contato conosco!
      </h1>
      <section className="m-5 w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-gray-200 rounded-lg p-5"
        >
          <fieldset className="border-none flex flex-col">
            <legend className="p-4 text-2xl font-bold text-center">Dados Pessoais</legend>
            <label className="pt-2 pb-2 block">
              <input
                type="text"
                name="nome"
                id="idnome"
                placeholder="Insira seu nome"
                className="text-lg w-full p-1 rounded-md border-none"
              />
            </label>
            <label className="pt-2 pb-2 block">
              <input
                type="text"
                name="email"
                id="idemail"
                placeholder="Insira seu email"
                className="text-lg w-full p-1 rounded-md border-none"
              />
            </label>
            <label className="pt-2 pb-2 block">
              <textarea
                name="mensagem"
                id="idmensagem"
                cols={30}
                rows={10}
                placeholder="Deixe sua mensagem!"
                className="text-lg w-full p-1 rounded-md border-none"
              ></textarea>
            </label>
          </fieldset>
          <button
            type="submit"
            value={"Enviar"}
            className="mt-4 mb-6 text-xl p-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
