document.querySelectorAll('.box.coursebox.grid.span4.col-md-4.card.grid.col-xs-12.p-y-1').forEach((card) => {
  card.onclick = () => location.href = card.querySelector('a').href
});
