const Container = document.querySelector('.Container');
const IAg = Container.querySelector('.InputAg');
const IConta = Container.querySelector('.InputConta');
const Botao = Container.querySelector('.Botao');
const div = Container.querySelector('div');
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
    if(input.value>this.Saldo){
        alert('Opa! Saldo insuficiente!');
        return;
    }
    this.Saldo -= input.value;
    mostrarSaldo();
};
Conta.prototype.depositar = function(){
    this.Saldo += input.value;
    mostrarSaldo();
};
Conta.prototype.mostrarSaldo = function(){
    criaP(`Novo saldo: ${this.Saldo.toFixed(2)}`);
};
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }
  CC.prototype = Object.create(Conta.prototype);
  CC.prototype.constructor = CC;
  
  CC.prototype.sacar = function() {
    if(input.value > (this.Saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.Saldo}`);
      return;
    }
  
    this.Saldo -= input.value;
    this.mostrarSaldo();
  };
  
  function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
  }
  CP.prototype = Object.create(Conta.prototype);
  CP.prototype.constructor = CP;
  
//funcoes para colocar no prototype >>
function telaInicial(algumacoisa){
    criaP(`Sua conta: ${algumacoisa.tipo} e seu saldo é: ${algumacoisa.Saldo}`);
    criarInput(div);
    botaoSacar(div);
    botaoDepositar(div);
}
function criaP(algumacoisa){
    const p = document.createElement('p');
    Container.appendChild(p);
    p.setAttribute('class','Informacoes');
    p.innerHTML = algumacoisa;
}
function botaoDepositar(p){
    const btnD = document.createElement('button');
    btnD.innerText =  'Depositar';
    btnD.setAttribute('class','Deposito');
    p.appendChild(btnD);
}
function botaoSacar(p){
    const btnS = document.createElement('button');
    btnS.innerText =  'Sacar';
    btnS.setAttribute('class','Saque');
    p.appendChild(btnS);
}
function criarInput(p){
    const input = document.createElement('input');
    Container.appendChild(input);
    input.setAttribute('class','InputNovo');
    p.appendChild(input);
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
Botao.addEventListener('click', (e)=>{
    const continha = new Conta(IAg.value, IConta.value)
    telaInicial(continha);
});
Container.addEventListener('click', (e)=>{
    const sacando = e.target;
    if(sacando.classList.contains('Saque')){
        criaP(`${continha.sacar()}`);
    }
});