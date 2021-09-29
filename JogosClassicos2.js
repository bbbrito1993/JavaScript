function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  backImage();
  vaca();
  mostrarCarros();
  movimentaCarro();
  movimentaVaca();
  posicaoInicialCarro();
  verColisao();
  incluiPontos();
  marcaPontos();
  pontosNegativos()
}



