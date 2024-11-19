import { UserProvider } from "./../context/UserContext"

export default function CadastroLayout({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}