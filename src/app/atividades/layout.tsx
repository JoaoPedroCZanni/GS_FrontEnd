import { AtividadeProvider } from "../context/AtividadeContext"

export default function AtividadesLayout({ children }: { children: React.ReactNode }) {
    return (
        <AtividadeProvider>
            {children}
        </AtividadeProvider>
    )
}