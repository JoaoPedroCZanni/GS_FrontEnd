import Image from 'next/image';
import Lucas from '../img/lucas.jpeg';
import Joao from '../img/joao.jpg';
import Rafael from '../img/Rafael.jpg';

export default function Integrantes() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center m-8 mb-6">Página de Integrantes</h1>
            <h2 className="text-center my-2 sm:my-6 text-xl sm:text-2xl">REPOSITÓRIO</h2>
            <div className="text-center mb-6">
                <p>
                    <a href="https://github.com/JoaoPedroCZanni/GS_FrontEnd" target="_blank" className="text-blue-500 no-underline sm:text-xl lg:2xl">https://github.com/JoaoPedroCZanni/GS_FrontEnd</a>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly mt-6 mb-20 gap-16 lg:gap-24 xl:gap-52">
                <section className="text-center flex flex-col items-center">
                    <Image src={Lucas} alt="Lucas" className="w-7/12 sm:w-5/12 lg:w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg sm:text-2xl lg:text-lg">
                        Nome: Lucas Lerri de Almeida<br />
                        RM: 554635<br />
                        Turma: 1TDSPI<br />
                        <a href="https://github.com/lerri05" className="text-blue-500 no-underline" target='_blank'>https://github.com/lerri05</a>
                    </p>
                </section>
                <section className="text-center flex flex-col items-center">
                    <Image src={Joao} alt="Joao" className="w-7/12 sm:w-5/12 lg:w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg sm:text-2xl lg:text-lg"> João Pedro C. Zanni<br />
                        RM: 557591<br />
                        Turma: 1TDSPI<br />
                        <a href="https://github.com/JoaoPedroCZanni" className="text-blue-500 no-underline" target='_blank'>https://github.com/JoaoPedroCZanni</a>
                    </p>
                </section>
                <section className="text-center flex flex-col items-center">
                    <Image src={Rafael} alt="Rafael" className="w-7/12 sm:w-5/12 lg:w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg sm:text-2xl lg:text-lg"> Rafael Bompadre Lima<br />
                        RM: 556459<br />
                        Turma: 1TDSPH<br />
                        <a href="https://github.com/Rafa130206" className="text-blue-500 no-underline" target='_blank'>https://github.com/Rafa130206</a> <br />
                        <a href="https://www.linkedin.com/in/rafael-bompadre-lima" className='text-blue-500 no-underline' target='_blank'>https://www.linkedin.com/in/rafael-bompadre-lima</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
