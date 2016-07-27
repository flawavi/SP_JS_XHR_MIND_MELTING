var predator = (function () {
  var _carnivores = []
  var _herbivores = []

  return {
    getCarnivores: function (callback) {
      var xhr = XMLHTttpRequest()
      xhr.open('GET', 'carnivores.json')
      xhr.addEventListener('load', function() {
        carnivores = JSON.parse(xhr.responseText)
        callback(carnivores)
      })
      xhr.send()


    },
    getHerbivores: function (callback) {
      var xhr = XMLHTttpRequest()
      xhr.open('GET', 'herbivores.json')
      xhr.addEventListener('load', function() {
        herbivores = JSON.parse(xhr.responseText)
        callback(herbivores)
      })
      xhr.send()
  }

}())
