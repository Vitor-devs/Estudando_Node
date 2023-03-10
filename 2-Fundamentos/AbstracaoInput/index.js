import inquirer from 'inquirer'

inquirer
    .prompt([
    {
        name: 'p1', 
        message: 'Qual a primeira nota? '
    }, 
    {
        name: 'p2', 
        message: "Qual é a segunda nota? "
    },
]).then((answers)=>{
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(media)
}).catch((err)=>console.log(err))