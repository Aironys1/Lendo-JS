// Tipos de dados

var quebra = ' \n \n';
var linha = '\b \b'

var x = 30;
var y = 20;
var soma = x + y

console.log("A soma de x + y é: " +soma)

soma = document.write(soma=(x+y))
document.querySelector('.soma0').innerText = 'var x = 30; var y = 20; var soma = x + y' +quebra
document.querySelector('.soma1').innerText = 'A soma de X + Y é : '+(x+y) + quebra ;

var a = 12;
var b = 5;

if (a == b) {
   
        console.log("12 é igual a 5")
    
}else{
  
        console.log("A é diferente de B")
    
}



var marviv = "Robô";
switch (marviv) {
    case "Humano":
        document.write("Eu sou um humano");
        break;
    case "Boneco":
        document.write("Eu sou um boneco");
        break;
    case "Robô":
        document.write("Eu sou um Robô"+ quebra +linha);
        break;
    case "Ferro":
        document.write("Eu sou de ferro");
        break;

}