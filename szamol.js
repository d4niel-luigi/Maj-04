function Myfunction() {
    var x = document.getElementById("kvaff").value;
    var y = document.getElementById("cikesz").value;
    var sum = parseInt(x * 10 + y * 150)

    document.getElementById("ossz").innerHTML = "Összesen:" + sum + " pont"
    if (x < 0) return 0
    if (y < 0) return 0
    if (y < 1) return 1


}