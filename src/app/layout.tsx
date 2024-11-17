import "./globals.css";
import Cabecalho from "./components/Cabecalho";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <Cabecalho/>
        {children}
      </body>
    </html>
  )
}
