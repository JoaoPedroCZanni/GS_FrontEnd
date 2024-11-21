export type TipoUsuario = {
    $cpf: string;
    $nome: string;
    $email: string;
    $senha: string;
    $cep: string;
    $forma_pagamento: string;
    $status_pagamento: string;
}

export type TipoAtividade = {
    $id: number;
    descricao: string;
    pontos_recompensa: number;
}

export type TipoRecompensa = {
    $id: number;
    nm_recompensa: string;
    descricao: string;
    pontos_necessarios: number;
}

export type TipoEvidenvia = {
    $id: number;
    ipo_evidencia: string;
    url_arquivo: string;
    data_envio: string;
    status_evidencia: string;
}