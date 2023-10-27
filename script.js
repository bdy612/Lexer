function enter(p1, p2){
    localStorage.setItem("p1",p1)
    localStorage.setItem("p2",p2)
    window.location.href="index1.html"
}
    document.getElementById('ent');
    addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById('ent').click();
    	}
    });
