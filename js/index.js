var loc = window.location.pathname.split("/").slice(-1),
    actives = document.querySelectorAll("header a[href]")

loc = (loc[0] == "") ? "index.html" : loc

for (var i=0;i<actives.length;i++) {
  var a = actives[i]
  a.classList.add("hfx")
  if (a.getAttribute("href") == loc) {
    a.classList.add("active")
  }
}
