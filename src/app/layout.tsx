import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import '@/app/globals.css';

export const metadata = {
  title: 'Green Change',
  description: 'Um incentivo para um mundo mais limpo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <Cabecalho />
        <div className="flex-grow"> 
          {children}
        </div>
        <Rodape />
      </body>
    </html>
  )
}