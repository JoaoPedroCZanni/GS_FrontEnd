import { UserProvider } from "../context/UserContext"
import { PontuacaoProvider } from "../context/PontuacaoContext"

export default function CadastroLayout({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <PontuacaoProvider>
                {children}
            </PontuacaoProvider>
        </UserProvider>
    )
}