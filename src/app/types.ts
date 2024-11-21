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