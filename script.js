function myfunction(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

var modal=document.getElementById("myModal");
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick =function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }