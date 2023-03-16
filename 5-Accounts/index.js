// Módulos ext
import chalk from 'chalk'
import inquirer from 'inquirer'

// Módulos int
import fs from 'fs'

console.log('inicio do accounts')

function operacoes() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja? ',
            choices: [
                "Criar Conta",
                "Consultar saldo",
                "Depositar",
                "Sacar",
                "Sair"
            ]
        }
    ])
    .then((resposta)=>{
        const action = resposta['action'] //devido ao name no inquirer
        
        if(action === "Criar Conta"){
            createAccount()
        } else if (action === "Consultar saldo"){
            pegarSaldo()
        } else if (action === "Depositar"){
            deposit()
        } else if (action === "Sacar"){
            sacar()
        } else if (action === "Sair"){
            console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"))
            process.exit()
        }


    })
    .catch(erro => console.log(erro))
}

//criar conta
function createAccount(){
    console.log(chalk.bgGreen.black("Obrigado por usar o nosso banco"))
    console.log(chalk.green("Personalize sua conta: "))
    buildAccount()

}

function buildAccount(){
    inquirer.prompt([{
        name: "NomeConta",
        message: "Digite o nome da conta: ",
    }]).then((resposta)=>{
        const nomeConta = resposta['NomeConta']
        console.log(nomeConta)

        if(!fs.existsSync('Contas')){
            fs.mkdirSync("Contas")
        }

        if(fs.existsSync(`Contas/${nomeConta}.json`)){
            console.log(chalk.bgRed("Já existe essa conta"))
            buildAccount()
            return
        }

        fs.writeFileSync(`Contas/${nomeConta}.json`, '{"balance": 0}', function(err){console.log(err)})

        console.log(chalk.green("Sua conta foi criada com o nome : " + nomeConta))
        operacoes()
    }).catch((erro)=>{
        console.log(erro)

    })
}


//depositar dinheiro
function deposit(){
    inquirer.prompt([{
        name: 'Conta',
        message:'Em qual conta você quer depositar?'
    }]).then((resposta)=>{
        const nomeConta = resposta['Conta']

        if (!verificaExistencia(nomeConta)){
            return deposit()
        } 

        inquirer.prompt([{
            name: "quantia",
            message: "Quanto você deseja depositar?"
        }]).then((resposta)=>{
            const quantia = resposta['quantia']
            adicionaValor(nomeConta, quantia)
            operacoes()
        })
    })

}

function verificaExistencia(conta){
    if(!fs.existsSync(`Contas/${conta}.json`)){
        console.log(chalk.bgRed.black("Esta conta não existe, tente novamente"))
        return false
    } 
    return true
}

function adicionaValor(conta, valor){
    const accountData = pegarConta(conta)

    if(!valor){
        console.log("Ocorreu um erro, digite algo")
        deposit()
    }

    accountData.balance = parseFloat(valor) + parseFloat(accountData.balance)
    fs.writeFileSync(`Contas/${conta}.json`, JSON.stringify(accountData))
    console.log(chalk.green(`Foi depositado o valor de ${valor}`))
    

}

function pegarConta(nomeConta){
    const contaJSON = fs.readFileSync(`Contas/${nomeConta}.json`, {encoding:'utf-8', flag: 'r'})
    return JSON.parse(contaJSON)
}

function pegarSaldo(){
    inquirer.prompt([{
        name: 'nomeConta',
        message: 'Qual nome da sua conta?'
    }]
    ).then((resposta)=>{
        const conta = resposta["nomeConta"]

        if(!verificaExistencia(conta)){
            return pegarConta()
        }

        const salarioNaConta = pegarConta(conta).balance

        console.log(`Salário na conta ${salarioNaConta}`)
    })
}


function sacar(nomeDaConta, valor){
    inquirer.prompt([{
        name: 'Conta',
        message:'Em qual conta você quer sacar?'
    }]).then((resposta)=>{
        const nomeConta = resposta['Conta']

        if (!verificaExistencia(nomeConta)){
            return sacar()
        } 

        inquirer.prompt([{
            name: "quantia",
            message: "Quanto você deseja sacar?"
        }]).then((resposta)=>{
            const quantia = resposta['quantia']
            tiraValor(nomeConta, quantia)
            operacoes()
        })
    })

}


function tiraValor(conta, valor){
    const accountData = pegarConta(conta)

    if(!valor){
        console.log("Ocorreu um erro, digite algo")
        sacar()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(valor)
    fs.writeFileSync(`Contas/${conta}.json`, JSON.stringify(accountData))
    console.log(chalk.green(`Foi retirado o valor de ${valor}`))
    

}

operacoes()