var nen = document.getElementById("nen");
document.getElementById("body").onclick = function() {
    nen.play();
}
document.getElementById("body").addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        window.location = "game1.html";
    }
});
setInterval(() => {
    document.getElementById("video").play();
}, 1000);