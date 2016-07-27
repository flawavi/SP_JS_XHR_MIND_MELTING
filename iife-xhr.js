
function showCarnivores (carnivores) {
  var list = document.querySelector('.carnivores')

  carnivores.forEach(function (carnivore) {
    list.innerHTML += `<li>${carnivore}</li>`
  })
}

function showHerbivores (herbivores) {
  var list = document.querySelector('.herbivores')

  herbivores.forEach(function (herbivore) {
    list.innerHTML += `<li>${herbivore}</li>`
  })
}

predator.getCarnivores(showCarnivores);
predator.getHerbivores(showHerbivores);
