import Image from "next/image";
import img1 from "../app/img/img1.jpeg";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Image 
        src={img1} 
        alt="Plano de Fundo" 
        layout="fill" 
        objectFit="cover" 
        className="-z-10"
        placeholder="blur"
        priority
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold underline text-center p-8 text-white">
          Green Change
        </h1>
        <div>
          <button className="text-center text-4xl bg-green-600 hover:bg-green-700 text-white font-bold p-4 mt-4 rounded-lg"><a href="/cadastro">Cadastre-se</a></button>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-24 items-center justify-evenly lg:mt-16">
          <p className="w-9/12 lg:w-[75vw] xl:w-[75vw] text-center text-white bg-green-700 bg-opacity-80 p-4 rounded-lg text-lg sm:text-xl md:text-2xl mb-6">
            Descubra uma nova forma de economizar energia e adotar práticas sustentáveis com nossa plataforma por assinatura! Ao participar, você será incentivado a reduzir seu consumo energético, aprender sobre tecnologias limpas e contribuir para um futuro mais verde. Por meio de atividades práticas validadas por evidências, você acumula pontos que podem ser trocados por recompensas sustentáveis, como dispositivos de baixo consumo. Além disso, monitore seu progresso, participe de uma comunidade engajada na sustentabilidade energética e faça parte da mudança que o mundo precisa. Junte-se a nós e transforme sua rotina em uma oportunidade de cuidar do planeta!
          </p>
        </div>
      </div>
      
      <div>
        <div>
          <h3 className="text-xl sm:text-xl md:text-2xl font-bold underline text-center p-8 text-white">Saiba mais!</h3>
        </div>
        <div className="flex flex-col items-center gap-6"> 
          <ul className="flex flex-col items-center gap-6"> 
            <li>
              <a 
                href="https://www.brookfield.com/pt-br/noticias-insights/insights/o-salto-para-energia-limpa-e-emissoes-neutras-de-carbono"
                target="_blank" 
                className="text-center hover:bg-green-600 text-white font-bold p-2 rounded-lg"
              >
                O salto para a energia limpa e as emissões neutras de carbono
              </a>
            </li>
            <li>
              <a 
                href="https://carbonfreebrasil.com/blog/novidades-em-tecnologias-e-inovacoes-para-a-reducao-de-emissoes-de-carbono-em-diferentes-setores/"
                target="_blank" 
                className="text-center hover:bg-green-600 text-white font-bold p-2 rounded-lg"
              >
                Novidades em tecnologias e inovações para a redução de emissões de carbono em diferentes setores
              </a>
            </li>
            <li>
              <a 
                href="https://www.wwf.org.br/?27502/Um-mundo-com-energia-limpa-e-possivel-em-2050"
                target="_blank" 
                className="text-center hover:bg-green-600 text-white font-bold p-2 rounded-lg"
              >
                Um mundo com energia limpa é possível, em 2050
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
