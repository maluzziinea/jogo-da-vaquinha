//VARIÁVEIS DO ATOR.
let xAtor = 100
let yAtor = 360

function mostraAtor (){
    image (imagemDoAtor, 100, yAtor, 30, 30)
}

function movimentaAtor (){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3
    }
    if (keyIsDown(DOWN_ARROW)){
        yAtor += 3
    }
}