import Image from "next/image";
import img1 from "../app/img/img1.jpeg"
export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold underline text-center m-8">Green Change</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-24 items-center justify-evenly lg:mt-16">
            <Image src={img1} alt="img1" className="w-9/12 md:w-7/12 lg:w-[40vw] xl:w-[30vw] my-16 rounded-xl"/>
            <p className="w-9/12 lg:w-[45vw] xl:w-[30vw] text-center bg-slate-300 p-4 rounded-lg text-lg sm:text-xl md:text-2xl mb-12">Descubra uma nova forma de economizar energia e adotar práticas sustentáveis com nossa plataforma por assinatura! Ao participar, você será incentivado a reduzir seu consumo energético, aprender sobre tecnologias limpas e contribuir para um futuro mais verde. Por meio de atividades práticas validadas por evidências, você acumula pontos que podem ser trocados por recompensas sustentáveis, como dispositivos de baixo consumo. Além disso, monitore seu progresso, participe de uma comunidade engajada na sustentabilidade energética e faça parte da mudança que o mundo precisa. Junte-se a nós e transforme sua rotina em uma oportunidade de cuidar do planeta!</p>
        </div>
    </div>
  );
}
