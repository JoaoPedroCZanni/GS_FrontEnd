import { NextResponse } from "next/server";

export async function GET() {

    try {
        const response = await fetch("http://localhost:8080/usuario");
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Falha na leitura dos dados!", error);
        return NextResponse.json({error:"Não foi possível listar os dados: " + error});
    }
}
