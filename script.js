function openNav() {
  document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0";
}

var q = document.getElementsByClassName("question");
var i;

for (i = 0; i < q.length; i++) {
  q[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}