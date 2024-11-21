import { RecompensaProvider } from "../context/RecompensaContext"

export default function RecompensasLayout({ children }: { children: React.ReactNode }) {
    return (
        <RecompensaProvider>
            {children}
        </RecompensaProvider>
    )
}