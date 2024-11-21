"use client";
import { Toaster, toast } from "react-hot-toast";

export default function Concluir() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const tipo_evidencia = form.tipo_evidencia.value.trim();
    const url_arquivo = form.url_arquivo.value.trim();
    const data_envio = form.data_envio.value.trim();
    const status_evidencia = form.status_evidencia.value.trim();

    if (!tipo_evidencia || !url_arquivo || !data_envio || !status_evidencia) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    
    toast.success("Evidência enviada com sucesso!");
    form.reset();
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <h1 className="text-center my-6 pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Conclua uma Atividade!
      </h1>
      <section className="m-5 w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[80vw] sm:w-[50vw] bg-gray-200 rounded-lg p-5"
        >
          <fieldset className="border-none flex flex-col">
            <legend className="p-4 text-2xl font-bold text-center">
              Coloque as informações da sua evidência de conclusão
            </legend>
            <label className="pt-2 pb-2 block">
              <select
                name="tipo_evidencia"
                id="idTipo_evidencia"
                className="text-lg w-full p-2 rounded-md border-none"
              >
                <option value="">Selecione o tipo de evidência</option>
                <option value="imagem">Imagem</option>
                <option value="video">Vídeo</option>
              </select>
            </label>
            <label className="pt-2 pb-2 block">
              <input
                type="url"
                name="url_arquivo"
                id="idUrl_arquivo"
                placeholder="Insira o link do arquivo"
                className="text-lg w-full p-2 rounded-md border-none"
              />
            </label>
            <label className="pt-2 pb-2 block">
              <input
                type="date"
                name="data_envio"
                id="idData_envio"
                className="text-lg w-full p-2 rounded-md border-none"
              />
            </label>
            <label className="pt-2 pb-2 block">
              <select
                name="status_evidencia"
                id="idStatus_evidencia"
                className="text-lg w-full p-2 rounded-md border-none"
              >
                <option value="">Selecione o status da evidência</option>
                <option value="rejeitada">Rejeitada</option>
                <option value="pendente">Pendente</option>
                <option value="aceita">Aceita</option>
              </select>
            </label>
          </fieldset>
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
