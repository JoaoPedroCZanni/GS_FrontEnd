import Image from 'next/image'
import Erro from '@/app/img/img-404.jpg'
export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Image src={Erro} alt="404" className="w-1/3 mb-12"/>
          <h1 className="text-5xl font-bold text-red-600">404</h1>
          <h2 className="text-2xl mt-4">Página Não Encontrada</h2>
          <p className="mt-2 text-lg text-gray-700">Desculpe, a página que você está procurando não existe.</p>
          <a href="/" className="mt-4 text-blue-500 hover:underline">Voltar para a página inicial</a>
      </div>
  );
}
