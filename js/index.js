var loc = window.location.pathname.slice(6)||"index.html",
    actives = document.querySelectorAll("a[href='"+loc+"']")

for (var i=0;i<actives.length;i++) {
  actives[i].classList.add("active-link")
}
