statusModelo = "";
img = "";
objetos = [];

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();

    detectorObj = ml5.objectDetector("cocoSsd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando objetos";
}

function preload(){
    img = loadImage("escritorio.jpg");
}

function draw(){
    image(img, 0, 0, 600, 400);
    
    if(statusModelo != ""){
        for(i = 0; i < objetos.lengh; i++){
            document.getElementById("status").innerHTML = "Status de detecção: Objeto detectado";
            
            fill(225, 0, 0);
            
            precisao = floor(objetos[i].confidence * 100);
            text(objetos[i].label + " " + precisao + "%", objetos[i].x, objetos[i].y);

            noFill();
            stoke(225, 0, 0);

            rect(objeto[i].x, objeto[i].y, objeto[i].width, objeto[i].height);
        };
    }
}

function modelLoaded(){
    console.log("O modelo foi carregado");

    statusModelo = true;
    detectorObj.detect(img, gotResults);
}

function gotResults(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);

        objetos = result;
    }
}
