localStorage.setItem("name", "hello");
localStorage.setItem("type", "0");
localStorage.setItem("symbol", "O");

function twoplayer(){
    var n = document.getElementById("name").value;
    localStorage.name = n;
    localStorage.type = "3";
    document.getElementById("subm").style.display = "block";
    document.getElementById("md").style.display = "none";
}

function oneplayer(){
    var n = document.getElementById("name").value;
    localStorage.name = n;
    document.getElementById("symb").style.display = "block";
    document.getElementById("md").style.display = "none";
}

function cross(){
    localStorage.symbol = "X";
    document.getElementById("firs_move").style.display = "block";
    document.getElementById("symb").style.display = "none";
}

function zero(){
    localStorage.symbol = "O";
    document.getElementById("firs_move").style.display = "block";
    document.getElementById("symb").style.display = "none";
}

function player(){
    localStorage.type = "1";
    document.getElementById("subm").style.display = "block";
    document.getElementById("firs_move").style.display = "none";
}

function comp(){
    localStorage.type = "2";
    document.getElementById("subm").style.display = "block";
    document.getElementById("firs_move").style.display = "none";
}

function play(){
    document.location = "game.html";
}






