var box = document.getElementById("box");

document.getElementById("button1").addEventListener("click", function() {
    box.style.height = "300px";
    box.style.width = "300px";
});

document.getElementById("button2").addEventListener("click", function() {
  box.style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function() {
  box.style.opacity = 0.05;
});

document.getElementById("button4").addEventListener("click", function() {
  box.reset = location.reload();
});