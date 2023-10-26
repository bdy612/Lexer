document.getElementById("p1").innerHTML=localStorage.getItem("p1")
document.getElementById("p2").innerHTML=localStorage.getItem("p2")
function p1(send){
    document.getElementsByClassName("text1")[0].innerHTML+=send+"<br>";
    document.getElementsByClassName("text2")[1].innerHTML+=send+"<br>";
}
function p2(send){
    
    document.getElementsByClassName("text2")[0].innerHTML+=send+"<br>";
    document.getElementsByClassName("text1")[1].innerHTML+=send+"<br>";
}
