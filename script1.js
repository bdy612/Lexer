document.getElementById("p1").innerHTML=localStorage.getItem("p1")
document.getElementById("p2").innerHTML=localStorage.getItem("p2")
var pm=0
var alr="This is the max. of the chat between you and him"
function p1(send){
    if (pm<9990){
        pm+=1
        document.getElementsByClassName("text1")[0].innerHTML+=send+"<br>";
        document.getElementsByClassName("text2")[1].innerHTML+=send+"<br>";
    }
    else{
        alert(alr)
    }
}
function p2(send){
    if (pm<9990){
        pm+=1
        document.getElementsByClassName("text2")[0].innerHTML+=send+"<br>";
        document.getElementsByClassName("text1")[1].innerHTML+=send+"<br>";
    }
    else{
        alert(alr)
    }
}
document.getElementById('ent1');
    addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 97) {
            document.getElementById('ent1').click();
    	}
    });
document.getElementById('ent2');
    addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 98) {
            document.getElementById('ent2').click();
    	}
    });
