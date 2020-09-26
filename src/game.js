function game() {
  document.getElementById('date').innerHTML = Date();
}

function generateDeck(){
  var cards = $.getJSON("/deck.json");
  return cards;
}
