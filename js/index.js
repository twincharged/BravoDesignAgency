var loc = window.location.pathname.split("/").slice(-1)||"index.html",
    actives = document.querySelectorAll("a[href]")

for (var i=0;i<actives.length;i++) {
  var a = actives[i]
  a.classList.add("hfx")
  if (a.getAttribute("href") == loc) {
    a.classList.add("active")
  }
}
