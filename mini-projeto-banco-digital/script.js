let user = prompt("Digite seu usuário") 
let password = Number(prompt("Digite sua senha"))

let userADM = "admadm"
let passwordADM = 123456
  
if(user == userADM && password == passwordADM){
    alert("Logado com sucesso!!")
    menu()
function menu(){
    let opcoes = Number(prompt(`
        [1] Ver saldo
        [2] Realizar Saque
        [3] Realizar Depósito
        [4] Transferência para outro usuário
        [5] Ver dados da conta
        [6] Altera Senha
        [7] Sair.
        `))
        return opcoes
}
}
else{
    alert("Usuario ou senha incorreta!!")
}