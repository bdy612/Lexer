var p1v=localStorage.getItem("p1")
var p2v=localStorage.getItem("p2")
document.getElementById("p2").innerHTML=p2v
document.getElementById("p1").innerHTML=p1v
function p1(send){
    document.getElementById("p1").innerHTML+="<br><h1>"+send+"</h1>";
    document.getElementById("p2").innerHTML+="<br><h2>"+send+"</h2>";
}
function p2(send){
    document.getElementById("p2").innerHTML+="<br><h1>"+send+"</h1>";
    document.getElementById("p1").innerHTML+="<br><h2>"+send+"</h2>";
}
