export class cliente {

    nome;
    _cpf;

    get cpf() {

        return this._cpf;

    }

    constructor (nome, cpf, senha) {

        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;

    }

    autenticar(senha) {

        return senha == this._senha
    }

}
