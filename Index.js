function Conta(Agencia, CConta, Saldo){ 
    this.Agencia = Agencia;
    this.CConta = CConta;
    this.Saldo = Saldo;
    this.Container = document.querySelector('.Container');
    this.eventos();
}
Conta.prototype.eventos = function(){
    this.Container.addEventListener('click', e=>{
        const el = e.target;
        if(el.classList.contains('Botao')) this.receberDados();
        if(el.classList.contains('btnSaque')){
          if(this.tipagem == 'CC'){
            CC.saque(this.input.value);
            }else{
            this.saque(this.input.value);};
        if(el.classList.contains('btnDep')) this.deposito(this.input.value);     
}});};
Conta.prototype.tipoConta = function(){
    this.tipagem = this.Agencia > 100 ? 'CC' : 'CP';
    return this.tipagem;
};
Conta.prototype.opcoes = function(){
    this.IAg.value = '';
    this.IConta.value = '';
    this.apresentarDado(`Agencia(Ag): ${this.Agencia} | Conta: ${this.CConta}
     | Tipo da conta: ${this.tipoConta()} | Saldo: R$${this.Saldo}`);
    this.inputNew();
    this.btnSaque();
    this.btnDep();
};
Conta.prototype.receberDados = function(){
     this.IAg = this.Container.querySelector('.InputAg');
     this.IConta = this.Container.querySelector('.InputConta');
     this.Agencia =  this.IAg.value;
     this.CConta =  this.IConta.value;
     this.Saldo = Math.floor(Math.random() * this.Agencia);
     this.opcoes();
};
Conta.prototype.saque = function(valor){
    if(valor>this.Saldo){
        //Por um callBack
        this.apresentarDado(`Saldo insuficiente! Por favor, tente novamente com outros valores ;)`);
        return;
    }else{
        this.Saldo -= valor;
        this.apresentarDado(`Tudo certo! Novo Saldo: R$${this.Saldo}!`);
}};
Conta.prototype.deposito = function(valor){
        //Por um callBack
        this.Saldo += Number(valor);
        this.apresentarDado(`Parabéns! Novo saldo: R$${this.Saldo}`);
};
Conta.prototype.apresentarDado = function(Dado){
    this.Div = this.Container.querySelector('div');
    this.p = document.createElement('p');
    this.Div.appendChild(this.p);
    this.p.setAttribute('class','Paragrafo');    
    this.p.innerHTML = Dado;
};
Conta.prototype.inputNew = function(){
    this.input = document.createElement('input');
    this.Div.appendChild(this.input);
    this.input.setAttribute('class','inputOpcoes');
};
Conta.prototype.btnSaque = function(){
    this.BtnSaque = document.createElement('button');
    this.Div.appendChild(this.BtnSaque);
    this.BtnSaque.innerText = 'Sacar';
    this.BtnSaque.setAttribute('class','btnSaque');
};
Conta.prototype.btnDep = function(){
    this.BtnDep = document.createElement('button');
    this.Div.appendChild(this.BtnDep);
    this.BtnDep.innerText = 'Deposito';
    this.BtnDep.setAttribute('class','btnDep');
};
function CC(agencia, conta, limite) {
    Conta.call(this, agencia, conta);
    this.limite = limite;
  }
  CC.prototype = Object.create(Conta.prototype);
  CC.prototype.constructor = CC;
  CC.prototype.saque = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        //Por um callBack
        this.apresentarDado(`Saldo insuficiente mesmo com o limite! Por favor, tente novamente com outros valores ;)`);
        return;
    }else{
        this.Saldo -= valor;
        this.apresentarDado(`Tudo certo! Novo Saldo: R$${this.Saldo}!`);
}};
const IniciarConta = new Conta();