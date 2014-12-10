var loc = window.location.pathname.slice(6),
    actives = document.querySelectorAll("a[href='"+(loc==="/"?"index.html":loc)+"']")

for (var i=0;i<actives.length;i++) {
  actives[i].classList.add("active-link")
}
