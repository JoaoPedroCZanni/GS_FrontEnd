import { AtividadeProvider } from "../context/AtividadeContext"
import { PontuacaoProvider } from "../context/PontuacaoContext"

export default function AtividadesLayout({ children }: { children: React.ReactNode }) {
    return (
        <AtividadeProvider>
            <PontuacaoProvider>
                {children}
            </PontuacaoProvider>
        </AtividadeProvider>
    )
}