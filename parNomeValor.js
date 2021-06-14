//par nome/valor
const saudacao = 'uepa'//contexto léxico 1

function exec() {
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 19,
    peso: 89,
    endereco: {
        logradouro: 'Rua Alecrim Dourado',
        numero: 123
    } 

}

console.log(saudacao)
console.log(exec())
console.log(cliente)