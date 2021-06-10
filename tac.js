var na = localStorage.name;
var type = localStorage.type;
var symbol = localStorage.symbol;
var w_s = null;
var arr = [];
for(j = 1; j <= 9; j++){ 
    arr.push(" ");
}
var s1 = 0;
var s2 = 0;


function display_score(){
if(type == 3){
    document.getElementById("score1").innerHTML = "Player 1 score : " + s1;
    document.getElementById("score2").innerHTML = "Player 2 score : " + s2;
    return;
}
document.getElementById("score1").innerHTML = "Matches won : " + s1;
document.getElementById("score2").innerHTML = "Matches loose : " + s2;
return;
}

document.getElementById("name").innerHTML = "Welcome " + na + " !";
display_score();

if(type == 2){
    s_change();
    document.getElementById("a" + 5).innerHTML = symbol;
    arr[4] = symbol;
    s_change();
}

function cl(x){
    if(document.getElementById("a" + x).innerHTML != " ")
    return;
    document.getElementById("a" + x).innerHTML = symbol;
    arr[x -1] = symbol;
    game_over();
    s_change();
    if(type != 3)
    {comp_move();
     game_over();}
}

function s_change(){
    if(symbol == "O")
    symbol = "X";
    else
    symbol = "O";
}

function check(v){    
    for (let i = 0; i < 8; i += 3) {
        if(v[i] == v[i + 1] && v[i] == v[i + 2] && v[i] != " "){
            return v[i];
        } 
    }
    
    for (let i = 0; i < 3; i++) {
        if(v[i] == v[i + 3] && v[i] == v[i + 6] && v[i] != " "){
            return v[i];
        } 
    }
    if(v[0] == v[4] && v[0] == v[8] && v[0] != " "){
        return v[0];
    }

    if(v[2] == v[4] && v[2] == v[6] && v[2] != " "){
        return v[2];
    }

    return 0;
}


function is_correct(){
    for(let i = 0; i < 9; i++){
        if(arr[i] != " ")
        continue;
        arr[i] = symbol;
        if(check(arr) != 0){
        arr[i] = " ";
        return 1;
       }
       arr[i] = " ";
    }
    return 0;
}


function comp_move(){
     if(arr[4] == " "){
         document.getElementById("a" + 5).innerHTML = symbol;
         arr[4] = symbol;
         s_change();
         return;
     }
     
     for(let i = 0; i < 9; i++){
         if(arr[i] != " ")
         continue;
         arr[i] = symbol;

         if(check(arr) != 0){
         document.getElementById("a" + (i + 1)).innerHTML = symbol;
         s_change();
         return;
        }
        arr[i] = " ";
     }
     
     for(let i = 0; i < 9; i++){
        if(arr[i] != " ")
        continue;
        s_change();
        arr[i] = symbol;
        if(check(arr) != 0){
            s_change();
            arr[i] = symbol;
        document.getElementById("a" + (i + 1)).innerHTML = symbol;
        s_change();
        return;
        }
        arr[i] = " ";
        s_change();
    }

    for(let i = 0; i < 9; i++){
        if(arr[i] != " ")
        continue;
        arr[i] = symbol;

        if(is_correct() == 1){
        document.getElementById("a" + (i + 1)).innerHTML = symbol;
        s_change();
        return;
       }
       arr[i] = " ";
    }

    for(let i = 0; i < 9; i++){
        if(arr[i] == " "){
        arr[i] = symbol;
        document.getElementById("a" + (i + 1)).innerHTML = symbol;
        s_change;
        return;
        }
    }

}


function game_over(){
    if(check(arr) != 0)
    {document.getElementById("game").style.display = "none";
    display_result(check(arr));
    return;}

    
    for(let i = 0; i < 9; i++){
        if(arr[i] == " ")
        return;
    }

    document.getElementById("game").style.display = "none";
    var ch = "U";
    display_result(ch);
    return;
}

function display_result(a){
    if(a == "U")
     document.getElementById("res").innerHTML = "Match Draw!";
    else if(a == "O" && localStorage.type == 3)
     {document.getElementById("res").innerHTML = "Player 1 won !!";
     s1++;}
    else if(a == "X" && localStorage.type == 3)
     {document.getElementById("res").innerHTML = "Player 2 won !!";
     s2++}
    else if(a == localStorage.symbol)
     {document.getElementById("res").innerHTML = "You won !!";
     s1++;}
    else
     {document.getElementById("res").innerHTML = "You loose!";
     s2++}
    document.getElementById("but").style.display = "block";
    display_score();
}

function play(){
    console.log("hello");
    for(let i = 0; i < 9; i++){
        document.getElementById("a" + (i + 1)).innerHTML = " ";
        arr[i] = " ";
    }
    document.getElementById("game").style.display = "block";
    document.getElementById("but").style.display = "none";
}


