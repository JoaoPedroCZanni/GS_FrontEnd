import { RecompensaProvider } from "../context/RecompensaContext"
import { PontuacaoProvider } from "../context/PontuacaoContext"

export default function RecompensasLayout({ children }: { children: React.ReactNode }) {
    return (
        <RecompensaProvider>
            <PontuacaoProvider>
                {children}
            </PontuacaoProvider>
        </RecompensaProvider>
    )
}