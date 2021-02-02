document.getElementById('botao').addEventListener('click', function(){
    var projeto = Number(document.getElementById('projeto').value);
    var horas = Number(document.getElementById('horas').value);
    var dias = Number(document.getElementById('dias').value);
    var ferias = Number(document.getElementById('ferias').value);
    var valorHora;

    var valorHora = (projeto / (dias * 4 * horas) ) + ( ( ferias * dias * horas ) );
    console.log(valorHora);

}) 