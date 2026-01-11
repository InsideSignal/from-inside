// Goatcounter view counter
fetch('https://from-inside.goatcounter.com/counter/' + encodeURIComponent(location.pathname) + '.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var el = document.querySelector('.view-counter');
    if (el && data.count) {
      el.textContent = data.count.toLocaleString() + ' views';
    }
  })
  .catch(function() {});
