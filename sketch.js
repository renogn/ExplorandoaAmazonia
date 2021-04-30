//declaração das variáveis
var tela = 1;
var telafundo;
let som;

var orientador;
var programador;

var relogio;
var onçap;
var tamandua;
var onçapar;
var gavr;
var ari;
var maca;
var macp;
var boto;
var gatm;
var anta;

var largura = 150;
var altura = 50;
var xMenu = 140;
var yMenu1 = 180;
var yMenu2 = 250;
var yMenu3 = 320;
var xJogo1 = 50;
var xJogo2 = 210;
var yJogo1 = 240;
var yJogo2 = 300;

let cont = 0;
let contS = 0;
var pontos = 0;
var questao = 0;

//imagens
function preload() {
  telafundo = loadImage('Img projeto.jpg');
  orientador = loadImage('foto orientador.jpeg');
  programador = loadImage('foto programador.jpg');
  fontSans = loadFont('BalsamiqSans-Bold.ttf');
  relogio = loadImage('relogio.png');
  onçap = loadImage('onça pintada.jpg');
  tamandua = loadImage('tamandua-bandeira.jpg');
  onçapar = loadImage('onça parda.jpg');
  gavr = loadImage('harpia.jpg');
  ari = loadImage('ariranha.jpg');
  maca = loadImage('macaco aranha.jpg');
  macp = loadImage('macaco prego.jpg');
  boto = loadImage('boto.jpg');
  gatm = loadImage('gato maracaja.jpg');
  anta = loadImage('anta.jpg');
  som = loadSound('som de animais.mp3');
} 

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  som.loop();
  som.setVolume(0.25);
}

function draw() {
  //tela de menu
  if (tela == 1) {
    background(200);
    image(telafundo, 0,0);
    
    //título do jogo
    textSize(40);
    stroke(100);
    fill('#0f0');
    textFont(fontSans);
    text("EXPLORANDO", 210, 65);
    text("A", 208, 110);
    text("AMAZÔNIA", 210, 160);
    
    // iniciar o jogo
    textSize(20);
    textFont('Helvetica');
    textAlign(CENTER);
    
       if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ) {
    stroke(300);
    fill('#0f0');
    rect(xMenu, yMenu1, largura, altura, 5);
         if (mouseIsPressed) {
          tela = 4;
      }
    }
    
    stroke(100);
    fill(300);
    text("JOGAR", 213, 213);
    
    //tela de instruções
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ) {
    stroke(300);
    fill('#0f0');
    rect(xMenu, yMenu2, largura, altura, 5);
      if(mouseIsPressed) {
        tela = 2;
      }
    }  
    
    stroke(100);
    fill(300);
    text("INSTRUÇÕES", 213, 282);
    
    //tela de créditos
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ) {
    stroke(300);
    fill('#0f0');
    rect(xMenu, yMenu3, largura, altura, 5);
      if(mouseIsPressed) {
        tela = 3;
      }
    }
    
    stroke(100);
    fill(300);
    text("CRÉDITOS", 215, 353);
  }
  
  //primeira fase
  if (tela == 4) {
    background(0);
    image(telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 4.2;
    }
        
    //imagem do animal
    image(onçap, 68,40, 275,160);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Onça-pintada", 125, 273);
    text("Onça-parda", 285, 273);
    text("Leopardo", 125, 333);
    text("Puma", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 4.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 4.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 4.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 4.2;
      }
    }
     
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da primeira fase
  else if (tela == 4.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A Onça-pintada é um felino de porte grande,", 200, 100);
    text("com peso variando de 56 a 92 kg, podendo", 200, 120);
    text("chegar a 158kg, e comprimento variando de", 200, 140);
    text("1,12 a 1,85 m sem a cauda, que é relativa-", 200, 160);
    text("mente curta. Suas populações estão em de-", 200, 180);
    text("clínio, principalmente por causa da perda e", 200, 200);
    text("fragmentação do seu habitat. Está em sério", 200, 220);
    text("risco de extinção, na América Central e do", 200, 240);
    text("Norte e na Mata Atlântica brasileira. O co-", 200, 260);
    text("mércio internacional de onças ou de suas", 200, 280);
    text("partes é proibido, mas o felino ainda é fre-", 200, 300);
    text("quentemente caçado por fazendeiros e agri-", 200, 320);
    text("cultores na América do Sul.", 137, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 5;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }  
  
  //erro da primeira fase
  else if (tela == 4.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A onça-pintada é um felino de porte grande,", 200, 100);
    text("com peso variando de 56 a 92kg, podendo", 195, 120);
    text("chegar a 158kg, e comprimento variando de", 200, 140);
    text("1,12 a 1,85m sem a cauda, que é relativa-", 193, 160);
    text("mente curta. Suas populações estão em de-", 200, 180);
    text("clínio, principalmente por causa da perda e", 193, 200);
    text("fragmentação do seu habitat. Está em sério", 200, 220);
    text("risco de extinção, na América Central e do", 193, 240);
    text("Norte e na Mata Atlântica brasileira. O co-", 193, 260);
    text("mércio internacional de onças ou de suas", 193, 280);
    text("partes é proibido, mas o felino ainda é fre-", 193, 300);
    text("quentemente caçado por fazendeiros e agri-", 200, 320);
    text("cultores na América do Sul.", 137, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 5;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //tela de instruções
  else if (tela == 2) {
    background(300);
    
    //título da página
    textSize(35);
    noStroke(10);
    fill('#0f0');
    text("INSTRUÇÕES", 200, 50);
    text("COMO JOGAR", 200, 217);
    
    //texto sobre o jogo
    textSize(18);
    stroke(100);
    fill(1);
    textFont('Helvetica');
    text("EXPLORANDO A AMAZÔNIA É UM JOGO", 200, 80);
    text("RECOMENDADO PARA ALUNOS DO", 200, 105);
    text("6º AO 9º ANO PARA APRENDER SOBRE", 200, 130);
    text("A DIVERSIDADE DA FAUNA EXISTENTE", 200, 155);
    text("NA REGIÃO DA FLORESTA AMAZÔNICA.", 200, 180);
    
    //texto de como jogar
    textSize(15);
    stroke(100);
    fill(1);
    text("DESCUBRA QUAL É O ANIMAL QUE APARECE NA", 200, 240);
    text("TELA CLICANDO NA OPÇÃO QUE CORRESPONDE", 200, 265);
    text("AO SEU NOME. PRESTE ATENÇÃO NO TEMPO,", 190, 290);
    text("VOCÊ TERÁ 30 SEGUNDOS PARA ESCOLHER A", 190, 315);
    text("RESPOSTA. QUANTO MAIS VOCÊ ACERTAR MAIOR", 205, 340);
    text("SERÁ SUA PONTUAÇÃO FINAL.", 135, 365);
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 390);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //tela de créditos
  else if (tela == 3) {
    background(300);
    
    //título da página
    textSize(35);
    noStroke(10);
    fill('#0f0');
    text("CRÉDITOS", 200, 50);
    
    //texto
    textSize(15);
    stroke(150);
    fill(1);
    textFont('Helvetica');
    text("RENO GONÇALVES NETO", 250, 80);
    text("Função: Programador", 250, 100);
    text("Estudante de Ciências e Tecnologia,", 269, 130);
    text("na Universidade Federal do", 240, 150);
    text("Rio Grande do Norte.", 219, 170);
    text("JESSILUCIA ALVES", 250, 230);
    text("Função: Educadora", 250, 250);
    text("Professora de educação infantil.", 260, 290);
    
    //imagens
    image(orientador,20,210,100,120);
    image(programador, 20, 70, 100, 120);
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 215, 370);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //segunda fase
  else if (tela == 5) {
    background(0);
    image(telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 5.2;
    }
    
    //imagem do animal
    image(tamandua, 66,45, 280, 150);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Bicho-preguiça", 125, 273);
    text("Gambá", 285, 333);
    
    textSize(16);
    stroke(200);
    fill(1);
    text("Tamanduá-do-norte", 285, 273);
    text("Tamanduá-bandeira", 125, 333);
    
    //escolha das opções   
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 5.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 5.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 5.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 5.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da segunda fase
  else if (tela == 5.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O tamanduá-bandeira é um mamífero encon-", 200, 100);
    text("trado na América Central e do Sul. O ani-", 192, 120);
    text("mal mede entre 1,8 e 2,1 m de comprimento", 200, 140);
    text("e pesa até 41 kg. É facilmente reconhecido", 198, 160);
    text("pelo focinho longo e pelagem característica.", 200, 180);
    text("Possui longas garras nos dedos anteriores e", 200, 200);
    text("aparelho bucal adaptado a sua dieta espe-", 195, 220);
    text("cializada em formigas e cupins. As princi-", 190, 240);
    text("pais ameaças à sobrevivência da espécie", 192, 260);
    text("são a caça e a destruição do habitat, e é um", 200, 280);
    text("animal susceptível a ser atingido fatalmente", 195, 300);
    text("por incêndios e atropelamentos.", 155, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 6;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da segunda fase
  else if (tela == 5.2) {
    background(0);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O tamanduá-bandeira é um mamífero encon-", 200, 100);
    text("trado na América Central e do Sul. O ani-", 192, 120);
    text("mal mede entre 1,8 e 2,1m de comprimento", 200, 140);
    text("e pesa até 41 kg. É facilmente reconhecido", 198, 160);
    text("pelo focinho longo e pelagem característica.", 200, 180);
    text("Possui longas garras nos dedos anteriores e", 200, 200);
    text("aparelho bucal adaptado a sua dieta espe-", 195, 220);
    text("cializada em formigas e cupins. As princi-", 190, 240);
    text("pais ameaças à sobrevivência da espécie", 192, 260);
    text("são a caça e a destruição do habitat, e é", 188, 280);
    text("um animal susceptível a ser atingido fatal-", 195, 300);
    text("mente por incêndios e atropelamentos.", 183, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 6;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //terceira fase
  else if (tela == 6) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 6.2;
    }
    
    //imagem do animal
    image(onçapar, 68,45, 275, 150);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Onça-parda", 125, 273);
    text("Tigre", 285, 273);
    text("Guepardo", 125, 333);
    text("Onça-pintada", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 6.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 6.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 6.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 6.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da terceira fase
  else if (tela == 6.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A Onça-parda ou puma é um mamífero nati-", 200, 100);
    text("vo da América. É presente tanto em regiões", 200, 120);
    text("tropicais como de clima mais frio. Chega a", 196, 140);
    text("1,5 m e pesa até 72 kg. Possui coloração va-", 200, 160);
    text("riando do cinzento ao marrom-avermelhado,", 200, 180);
    text("com a ponta da cauda de cor preta, áreas la-", 200, 200);
    text("terais do focinho e ventre de cor branca.", 190, 220);
    text("Possui as mais longas patas traseiras dentre", 200, 240);
    text("os felinos. A espécie já foi extinta em alguns", 200, 260);
    text("locais da América do Norte, do Sul e Central.", 200, 280);
    text("As principais causas disso são a caça, frag-", 200, 300);
    text("mentação e destruição do habitat e, depen-", 198, 320);
    text("dendo da região, atropelamentos.", 160, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 7;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da terceira fase
  else if (tela == 6.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A onça-parda ou puma é um mamífero nati-", 200, 100);
    text("vo da América. É presente tanto em regiões", 200, 120);
    text("tropicais como de clima mais frio. Chega a", 196, 140);
    text("1,5m e pesa até 72 kg. Possui coloração va-", 200,160);
    text("riando do cinzento ao marrom-avermelhado,", 200, 180);
    text("com a ponta da cauda de cor preta, áreas la-", 200, 200);
    text("terais do focinho e ventre de cor brancas.", 190, 220);
    text("Possui as mais longas patas traseiras dentre", 200, 240);
    text("os felinos. A espécie já foi extinta em alguns", 200, 260);
    text("locais da América do Norte, do Sul e Central.", 200, 280);
    text("As principais causas disso são a caça, frag-", 200, 300);
    text("mentação e destruição do habitat e, depen-", 198, 320);
    text("dendo da região, atropelamentos.", 160, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 7;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //quarta fase
  else if (tela == 7) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 7.2;
    }
    
    //imagem do animal
    image(gavr, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Arara", 125, 273);
    text("Falcão", 285, 273);
    text("Gavião-real", 125, 333);
    text("Abutre", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 7.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 7.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 7.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 7.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da quarta fase
  else if (tela == 7.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Gavião-real ou Harpia é a mais pesada e", 200, 100);
    text("uma das maiores do mundo entre as aves de", 200, 120);
    text("rapina. Possui asas largas e redondas, per-", 200, 140);
    text("nas curtas e grossas, e dedos extremamente", 200, 160);
    text("fortes, com enormes garras, capazes até de", 200, 180);
    text("levantar um carneiro do chão. Tem entre 50", 200, 200);
    text("a 90 centímetros de altura, uma envergadura", 200, 220);
    text("de até 2,5 m e um peso variando entre 4 e 9", 200, 240);
    text("kg, dependendo do sexo. Atualmente, o Ga-", 200, 260);
    text("vião-real encontra-se praticamente restrito à", 200, 280);
    text("floresta amazônica, por conta da destruição", 200, 300);
    text("de seu habitat, além da caça predatória.", 187, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 8;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da quarta fase
  else if (tela == 7.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Gavião-real ou Harpia é a mais pesada", 195, 100);
    text("e uma das maiores do mundo entre as", 185, 120);
    text("aves de rapina. Possui asas largas e re-", 192, 140);
    text("dondas, pernas curtas e grossas, e dedos", 197, 160);
    text("extremamente fortes, com enormes garras,", 200, 180);
    text("capazes até de levantar um carneiro do", 190, 200);
    text("chão. Tem entre 50 a 90 centímetros de", 190, 220);
    text("altura, uma envergadura de até 2,5 m e um", 200, 240);
    text("peso variando entre 4 e 9 kg, dependendo", 200, 260);
    text("do sexo. Atualmente, o Gavião-real encon-", 200, 280);
    text("tra-se praticamente restrito à floresta ama-", 200, 300);
    text("zônica, por conta da destruição de seu ha-", 200, 320);
    text("bitat, além da caça predatória.", 154, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 8;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //quinta fase
  else if (tela == 8) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 8.2;
    }
    
    //imagem do animal
    image(ari, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Capivara", 125, 273);
    text("Sucuri", 285, 273);
    text("Lontra", 125, 333);
    text("Ariranha", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 8.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 8.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 8.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 8.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da quinta fase 
  else if (tela == 8.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A Ariranha ou Lontra-gigante é um mamífero", 200, 100);
    text("característico do Pantanal e da bacia do Rio", 200, 120);
    text("Amazonas, na América do Sul. Pode chegar", 200, 140);
    text("a medir quase 2 metros de comprimento, e", 195, 160);
    text("podem pesar até 34 kg. Trata-se de uma es-", 200, 180);
    text("pécie em perigo, e a principal ameaça à sua", 200, 200);
    text("sobrevivência é o desmatamento e a destrui-", 200, 220);
    text("ção do seu habitat. A poluição dos rios, por", 195, 240);
    text("agrotóxicos, resíduos industriais e sobretudo", 200, 260);
    text("mercúrio, usado na extração de ouro, preju-", 200, 280);
    text("dicam as ariranhas, que se alimentam, prin-", 200, 300);
    text("cipalmente, de peixes. Além disso, a expor-", 200, 320);
    text("tação de peles era intensa no passado.", 185, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 9;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da quinta fase
  else if (tela == 8.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A Ariranha ou Lontra-gigante é um mamífero", 200, 100);
    text("característico do Pantanal e da bacia do Rio", 200, 120);
    text("Amazonas, na América do Sul. Pode chegar", 200, 140);
    text("a medir quase 2 metros de comprimento, e", 195, 160);
    text("podem pesar até 34 kg. Trata-se de uma es-", 200, 180);
    text("pécie em perigo, e a principal ameaça à sua", 200, 200);
    text("sobrevivência é o desmatamento e a destrui-", 200, 220);
    text("ção do seu habitat. A poluição dos rios, por", 195, 240);
    text("agrotóxicos, resíduos industriais e sobretudo", 200, 260);
    text("mercúrio, usado na extração de ouro, preju-", 200, 280);
    text("dicam as ariranhas, que se alimentam, prin-", 200, 300);
    text("cipalmente, de peixes. Além disso, a expor-", 200, 320);
    text("tação de peles era intensa no passado.", 185, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 9;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //sexta fase
  else if (tela == 9) {
    background (0);
    image (telafundo, 0, 0);
  
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 9.2;
    }
    
    //imagem do animal
    image(maca, 105, 43, 200, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    text("Chimpanzé", 125, 273);
    text("Macaco-aranha", 285, 273);
    text("Macaco-prego", 125, 333);
    text("Gorila", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 9.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 9.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 9.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 9.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da sexta fase
  else if (tela == 9.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Macaco-aranha é um primata que habita", 200, 100);
    text("as florestas da Amazônia e América Central.", 200, 120);
    text("A espécie tem entre 42 e 66 cm de compri-", 200, 140);
    text("mento, com uma cauda de até 88 cm e pe-", 200, 160);
    text("sando até 11 kg. Os membros são longos e", 200, 180);
    text("esguios, assim como a cauda, que é preênsil,", 200, 200);
    text("o que permite pendurar-se pela floresta e lhe", 200, 220);
    text("confere o nome de Macaco-aranha. O des-", 195, 240);
    text("matamento e a fragmentação do habitat são", 200, 260);
    text("as principais causas da ameaça de extinção,", 200, 280);
    text("mas a caça predatória também afeta o nú-", 193, 300);
    text("mero de indivíduos pelas florestas.", 165, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 10;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da sexta fase
  else if (tela == 9.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Macaco-aranha é um primata que habita", 200, 100);
    text("as florestas da Amazônia e América Central.", 200, 120);
    text("A espécie tem entre 42 e 66 cm de compri-", 200, 140);
    text("mento, com uma cauda de até 88 cm e pe-", 200, 160);
    text("sando até 11 kg. Os membros são longos e", 200, 180);
    text("esguios, assim como a cauda, que é preênsil,", 200, 200);
    text("o que permite pendurar-se pela floresta e lhe", 200, 220);
    text("confere o nome de Macaco-aranha. O des-", 195, 240);
    text("matamento e a fragmentação do habitat são", 200, 260);
    text("as principais causas da ameaça de extinção,", 200, 280);
    text("mas a caça predatória também afeta o nú-", 193, 300);
    text("mero de indivíduos pelas florestas.", 165, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 10;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //sétima fase
  else if (tela == 10) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 10.2;
    }
    
    //imagem do animal
    image(macp, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Sagui", 125, 273);
    text("Macaco-aranha", 125, 333);
    text("Macaco-prego", 285, 333);
    
    textSize(17);
    stroke(200);
    fill(1);
    text("Mico-leão-dourado", 285, 273);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 10.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 10.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 10.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 10.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da sétima fase
  else if (tela == 10.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Macaco-prego está entre os primatas mais", 200, 100);
    text("comuns da América do Sul, se espalhando", 200, 120);
    text("pelo Brasil, Paraguai, Argentina, entre outros", 200, 140);
    text("países. Chega a medir 48 cm de comprimen-", 200, 160);
    text("to e pesar entre 1,3 e 4,8 kg, além disso, sua", 200, 180);
    text("cauda se assemelha à do Macaco-aranha,", 200, 200);
    text("mas não possui a mesma mobilidade, é mais", 200, 220);
    text("utilizada para manter a postura. A maior ame-", 200, 240);
    text("aça aos Macacos-pregos é a destruição do", 200, 260);
    text("habitat, mas também a caça reduz o número", 200, 280);
    text("de indivíduos, principalmente na Amazônia,", 200, 300);
    text("em que certos locais a espécie já foi extinta.", 200, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 11;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da sétima fase
  else if (tela == 10.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Macaco-prego está entre os primatas mais", 200, 100);
    text("comuns da América do Sul, se espalhando", 200, 120);
    text("pelo Brasil, Paraguai, Argentina, entre outros", 200, 140);
    text("países. Chega a medir 48 cm de comprimen-", 200, 160);
    text("to e pesar entre 1,3 e 4,8 kg, além disso, sua", 200, 180);
    text("cauda se assemelha à do Macaco-aranha,", 200, 200);
    text("mas não possui a mesma mobilidade, é mais", 200, 220);
    text("utilizada para manter a postura. A maior ame-", 200, 240);
    text("aça aos Macacos-pregos é a destruição do", 200, 260);
    text("habitat, mas também a caça reduz o número", 200, 280);
    text("de indivíduos, principalmente na Amazônia,", 200, 300);
    text("em que certos locais a espécie já foi extinta.", 200, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 11;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //oitava fase
  else if (tela == 11) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 11.2;
    }
    
    //imagem do animal
    image(boto, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Golfinho", 125, 273);
    text("Tubarão", 285, 273);
    text("Orca", 285, 333);
    
    textSize(17);
    stroke(200);
    fill(1);
    text("Boto-cor-de-rosa", 125, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 11.2;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 11.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 11.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 11.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da oitava fase
  else if (tela == 11.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Boto-cor-de-rosa é o maior golfinho de", 190, 100);
    text("água doce, presente em vários países da", 192, 120);
    text("América do Sul. No Brasil, é encontrado em", 200, 140);
    text("todos os afluentes do rio Amazonas. Seu", 192, 160);
    text("comprimento varia de 2,15 a 2,55 m e peso", 200, 180);
    text("de 150 a 185 kg, dependendo do sexo. É", 192, 200);
    text("um animal de grande valor cultural para o", 194, 220);
    text("país, já que faz parte de diversas lendas e", 196, 240);
    text("folclores brasileiros. Entretanto, ainda assim,", 200, 260);
    text("a invasão de seu habitat, com a construção", 200, 280);
    text("de várias hidrelétricas na região Norte do", 190, 300);
    text("Brasil, causa vítimas e força a espécie a mi-", 200, 320);
    text("grar da região e buscar outra moradia.", 180, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 12;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da oitava fase
  else if (tela == 11.2) {
    background(1);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Boto-cor-de-rosa é o maior golfinho de", 190, 100);
    text("água doce, presente em vários países da", 192, 120);
    text("América do Sul. No Brasil, é encontrado em", 200, 140);
    text("todos os afluentes do rio Amazonas. Seu", 192, 160);
    text("comprimento varia de 2,15 a 2,55 m e peso", 200, 180);
    text("de 150 a 185 kg, dependendo do sexo. É", 192, 200);
    text("um animal de grande valor cultural para o", 194, 220);
    text("país, já que faz parte de diversas lendas e", 196, 240);
    text("folclores brasileiros. Entretanto, ainda assim,", 200, 260);
    text("a invasão de seu habitat, com a construção", 200, 280);
    text("de várias hidrelétricas na região Norte do", 190, 300);
    text("Brasil, causa vítimas e força a espécie a mi-", 200, 320);
    text("grar da região e buscar outra moradia.", 180, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 12;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //nona fase
  else if (tela == 12) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 12.2;
    }
    
    //imagem do animal
    image(gatm, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Gato-maracajá", 125, 273);
    text("Gato-do-mato", 285, 273);
    text("Leopardo", 125, 333);
    text("Jaguatirica", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 12.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 12.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 12.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 12.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //acerto da nona fase
  else if (tela == 12.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Gato-maracajá é um felino nativo da Amé-", 200, 100);
    text("rica Central e do Sul, que habita grande par-", 200, 120);
    text("te da floresta amazônica. Seu comprimento", 200, 140);
    text("varia de 60 cm a 1 m, e pesando cerca de 4", 200, 160);
    text("kg. Os seus pelos são amarelo escuro nas", 200, 180);
    text("partes superiores do corpo e na parte exter-", 200, 200);
    text("na dos membros, possui manchas escuras", 200, 220);
    text("ao longo de todo corpo. A perda e fragmen-", 200, 240);
    text("tação do habitat são as principais causas da", 200, 260);
    text("ameaça da espécie no Brasil, assim como a", 200, 280);
    text("caça para controle predatório e atropelamen-", 200, 300);
    text("to em certas regiões.", 110, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 13;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //erro da nona fase
  else if (tela == 12.2) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('red');
    text("VOCÊ ERROU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("O Gato-maracajá é um felino nativo da Amé-", 200, 100);
    text("rica Central e do Sul, que habita grande par-", 200, 120);
    text("te da floresta amazônica. Seu comprimento", 200, 140);
    text("varia de 60 cm a 1 m, e pesando cerca de 4", 200, 160);
    text("kg. Os seus pelos são amarelo escuro nas", 200, 180);
    text("partes superiores do corpo e na parte exter-", 200, 200);
    text("na dos membros, possui manchas escuras", 200, 220);
    text("ao longo de todo corpo. A perda e fragmen-", 200, 240);
    text("tação do habitat são as principais causas da", 200, 260);
    text("ameaça da espécie no Brasil, assim como a", 200, 280);
    text("caça para controle predatório e atropelamen-", 200, 300);
    text("to em certas regiões.", 110, 320);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("ENTER para seguir", 285, 365);
    if (keyIsDown(ENTER)) {
      tela = 13;
      cont = 0;
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("ESC para voltar", 120, 365);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
  
  //décima fase
  else if (tela == 13) {
    background (0);
    image (telafundo, 0, 0);
    
    //estrutura do jogo
    stroke(0);
    fill(300);
    rect(50, 300, largura, altura);
    rect(210, 300, largura, altura);
    rect(50, 240, largura, altura);
    rect(210, 240, largura, altura);
    rect(50, 30, 310, 180);
    
    //tempo do jogo
    image(relogio, 15, 1, 25, 25);
    textSize(20);
    noStroke(0);
    fill(1);
    cont = cont + 1;
    contS = parseInt(cont/30);
    text(contS+ ":00", 68, 21);
    if (contS > 30) {
      tela = 13.2;
    }
  
    //imagem do animal
    image(anta, 65, 43, 280, 155);
    
    //textos do jogo
    textSize(20);
    stroke(200);
    fill(1);
    textFont('Helvetica');
    text("Anta", 125, 273);
    text("Hipopótamo", 285, 273);
    text("Capivara", 125, 333);
    text("Javali", 285, 333);
    
    //escolha das opções
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 13.1;
        pontos = pontos + 10;
        questao = questao + 1;
      }
    }
    
    if (mouseX > xJogo1 && mouseX < xJogo1 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if (mouseIsPressed) {
        tela = 13.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo1 && mouseY < yJogo1 + altura) {
      if (mouseIsPressed) {
        tela = 13.2;
      }
    }
    
    if (mouseX > xJogo2 && mouseX < xJogo2 + largura && mouseY > yJogo2 && mouseY < yJogo2 + altura) {
      if(mouseIsPressed) {
        tela = 13.2;
      }
    }
    
    //voltar para o menu
    textSize(18);
    noStroke(100);
    fill(1);
    text("aperte ESC para voltar ao menu", 200, 375);
    if (keyIsDown(ESCAPE)) {
      tela = 1;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }
    
  //acerto da décima fase
  else if (tela == 13.1) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A anta é o maior mamífero terrestre do Brasil", 200, 100);
    text("e o segundo maior da América do Sul, tendo", 200, 120);
    text("até 300 kg de peso e cerca de 2 m de com-", 200, 140);
    text("primento. Possuem dentes fortes e uma pe-", 200, 160);
    text("quena tromba móvel e sensível ao toque que", 200, 180);
    text("ajuda na alimentação. Tem a visão ruim, mas", 200, 200);
    text("boa audição e ótimo olfato, farejando cons-", 200, 220);
    text("tantemente. A caça predatória é a principal", 195, 240);
    text("ameaça à sobrevivência do animal, além da", 200, 260);
    text("alteração e degradação de seu habitat. Tudo", 200, 280);
    text("isso aumenta as chances de extinção da es-", 200, 300);
    text("pécie, já que possui uma taxa lenta de repro-", 200, 320);
    text("dução.", 56, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("pressione ENTER para seguir", 200, 365);
    if (keyIsDown(ENTER)) {
      tela = 14;
      cont = 0;
    }
  }
  
  //erro da décima fase
  else if (tela == 13.2) {
    background(200);
    image(telafundo, 0, 0);
    
    //estrutura principal
    stroke(0);
    fill(300);
    rect(25,25,350,350);
    
    //título da tela
    textAlign(CENTER);
    textSize(40);
    stroke(200);
    fill('#0f0');
    text("VOCÊ ACERTOU!", 200,67);
    
    //texto da tela
    textAlign(CENTER);
    textSize(17);
    stroke(200);
    fill(1);
    text("A anta é o maior mamífero terrestre do Brasil", 200, 100);
    text("e o segundo maior da América do Sul, tendo", 200, 120);
    text("até 300 kg de peso e cerca de 2 m de com-", 200, 140);
    text("primento. Possuem dentes fortes e uma pe-", 200, 160);
    text("quena tromba móvel e sensível ao toque que", 200, 180);
    text("ajuda na alimentação. Tem a visão ruim, mas", 200, 200);
    text("boa audição e ótimo olfato, farejando cons-", 200, 220);
    text("tantemente. A caça predatória é a principal", 195, 240);
    text("ameaça à sobrevivência do animal, além da", 200, 260);
    text("alteração e degradação de seu habitat. Tudo", 200, 280);
    text("isso aumenta as chances de extinção da es-", 200, 300);
    text("pécie, já que possui uma taxa lenta de repro-", 200, 320);
    text("dução.", 56, 340);
    
    //próxima fase
    textSize(18);
    noStroke(100);
    fill(1);
    text("pressione ENTER para seguir", 200, 365);
    if (keyIsDown(ENTER)) {
      tela = 14;
      cont = 0;
    }
  }
  
  //tela final
  else if (tela == 14) {
    background(0);
    image(telafundo, 0, 0);
    
    //estrutura
    stroke(0);
    fill(300);
    rect(25,90,350,290,20);
    
    //texto da tela
    textSize(40);
    stroke(50);
    fill('red');
    text("FIM DE JOGO", 200,67);
    
    //pontuação
    textSize(23);
    noStroke();
    fill(1);
    text("Você acertou "+questao+" questão(ões)!", 200, 130);
    text("Sua pontuação final foi: "+pontos, 200, 173);
    
    //mensagens finais
    textSize(20);
    noStroke();
    fill('#0f0');
    text("Obrigado por jogar!", 200, 212);
    
    textSize(17);
    noStroke();
    fill(1);
    text("A floresta amazônica abriga uma gigantesca", 200, 240);
    text("diversidade de animais, que estão sofrendo", 200, 260);
    text("com as ações errôneas do homem. Por isso,", 200, 280);
    text("sempre defenda a preservação deste bioma ", 200, 300);
    text("brasileiro, pela importância para todos os", 200, 320);
    text("humanos e para todos os que habitam!", 200, 340);
    
    //próxima fase
    textSize(17);
    noStroke();
    fill(1);
    text("pressione a SETA PARA CIMA para seguir", 200, 365); 
    if (keyIsDown(UP_ARROW)) {
      tela = 3;
      cont = 0;
      pontos = 0;
      questao = 0;
    }
  }  
}  
