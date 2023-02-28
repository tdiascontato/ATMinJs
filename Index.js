const Container = document.querySelector('.Container');
const IAg = Container.querySelector('.InputAg');
const IConta = Container.querySelector('.InputConta');
const Botao = Container.querySelector('.Botao');

//superclasse
function Conta(Agencia, Conta, Saldo){
    this.Agencia = Agencia;
    this.Conta = Conta;
    Object.defineProperty(this, 'Saldo',{
        enumerable:true,
        configurable:true,
        get: function(){
            Saldo = Math.floor(Math.random() * this.Agencia);
            return Saldo;
        },
    });
}
Conta.prototype.sacar = function(){
    
};
Conta.prototype.depositar = function(){

};
Conta.prototype.novoSaldo = function(){

};
//funcoes para colocar no prototype >>
function telaInicial(algumacoisa){
    
    criaP(`Sua conta: /*colococar o tipo da conta*/ e seu saldo é: ${algumacoisa.Saldo}`);
}
function criaP(algo){
    const p = document.createElement('p');
    Container.appendChild(p);
    p.setAttribute('class','Informacoes');
    p.innerHTML = algo;
    criarBotao(p);
}
function criarBotao(p){
    const NBotao = document.createElement('button');
    NBotao.innerText =  'Retorar ao Menu';
    NBotao.setAttribute('class','ApagarInformacoes');
    p.appendChild(NBotao);
}
function criarRandom(valor){
    return Math.floor(Math.random() * valor);
}
function limpar(){
    IAg.value = '';
    IConta.focus();
    IConta.value = '';
    IConta.focus();
}
//<<
//remover Inormações e voltar ao menuzinho:
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('ApagarInformacoes')){
        el.parentElement.remove();
        limpar();
    }
})
Botao.addEventListener('click', (e)=>{
    const continha = new Conta(IAg.value, IConta.value)
    telaInicial(continha);
});