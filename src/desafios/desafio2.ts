// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


let pessoa1 : Pessoa = {
    name : "maria",
    idade : 29,
    trabalho : Profissao.Professor,
    casado: true
};

let pessoa2 : Pessoa = {
    name : "roberto",
    idade : 19,
    casado: true,
    trabalho : Profissao.Engenheiro,
}

let pessoa3 : Pessoa = {
    name: "laura",
    idade: 32,
    trabalho: Profissao.Porteiro,
    casado:true
};

let pessoa4 : Pessoa= {
    name : "carlos",
    idade : 19,
    trabalho : Profissao.Pintor,
    casado:false
}