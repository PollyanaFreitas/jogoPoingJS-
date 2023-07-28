//variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
//let velocidadeXOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente =0;

let colidiu = false

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound('trilha.mp3');
  ponto = loadSound('raquetada.mp3');
  raquetada = loadSound('raquetada.mp3');
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete); 
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
 }

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro)
  }

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBorda(){
   if(xBolinha + raio > width || 
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    }
   if(yBolinha + raio > height ||
    yBolinha - raio <0  ){
    velocidadeYBolinha *= -1;
  }
}

  function mostraRaquete (x,y){
     rect(x,y, raqueteComprimento, raqueteAltura)
  }
 
function movimentaMinhaRaquete (){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
    }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
  yRaqueteOponente += velocidadeYOponente
  }

//function verificaColisaoRaquete(){
  //if(xBolinha  - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    //velocidadeXBolinha *= -1; //}}

function verificaColisaoRaquete(){
  colidiu= collideRectCircle(xRaquete,yRaquete, raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
}

function verificColisaoRaqueteOponente(){
  colidiu = collideReactCircle(xRaquete,yRaquete, raqueteComprimento, raqueteAltura, xBolinha, raio);
  raquetada
}

function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(15);
    fill(color(255,20,147));
    rect(150,10,40,20);
    fill(255);
    text(meusPontos, 170,26 );
    fill(color(255,20,147));
    rect(450,10,40,20)
    fill(255);
    text(pontosOponente, 470, 26);

}

function  marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  }
}
  

  
    
    
    
    
    
    
    
