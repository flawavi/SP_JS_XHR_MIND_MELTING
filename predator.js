var predator = (function () {
  var carnivores = []
  var herbivores = []

  return {
    getCarnivores: function (callback) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'carnivores.json')
      xhr.addEventListener('load', function(evt) {
        carnivores = JSON.parse(evt.target.responseText)
        callback(carnivores)
      })
      xhr.send()


    },
    getHerbivores: function (callback) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'herbivores.json')
      xhr.addEventListener('load', function(evt) {
        herbivores = JSON.parse(evt.target.responseText)
        callback(herbivores)
      })
      xhr.send()
    }
  }
}())
