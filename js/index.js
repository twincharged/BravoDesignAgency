var actives = document.querySelectorAll("a[href='"+window.location.pathname.slice(6)+"']")

for (var i=0;i<actives.length;i++) {
  actives[i].classList.add("active-link")
}
