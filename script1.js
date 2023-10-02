var p1v=localStorage.getItem("p1")
var p2v=localStorage.getItem("p2")
document.getElementById("p2").innerHTML=p2v
document.getElementById("p1").innerHTML=p1v
function p1(send){
    document.getElementsByClassName("p1")[0].innerHTML+="<br><h1>"+send+"</h1>";
    document.getElementsByClassName("p2")[0].innerHTML+="<br><h2>"+send+"</h2>";
}
function p2(send){
    document.getElementsByClassName("p2")[0].innerHTML+="<br><h1>"+send+"</h1>";
    document.getElementsByClassName("p1")[0].innerHTML+="<br><h2>"+send+"</h2>";
}
