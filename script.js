function enviar() {
    let nome = document.getElementById('primeiroNome').value;
    let sobrenome = document.getElementById('segundoNome').value;
    let cpf = document.getElementById('cpf').value;
    let ddd = document.getElementById('ddd').value;
    let celular = document.getElementById('celular').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    if (nome, sobrenome, cpf, ddd, celular, endereco, numero == "") {
        alert('Os campos abaixo, deverão ser preenchidos!');
        return false;
    } else {
        alert('Seja bem vindo(a) ' + nome + '.' + '\nSeu cadastro foi realizado com sucesso!');
    }



}