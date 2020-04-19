var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});

//filter functions
var filterFns = {
  numberGreaterThan50: function(itemElem) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt(number, 10) > 50;
  },
  ium: function(itemElem) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};

//bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function(event) {
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
  });

var buttonGroups = document.querySelector('.button-group');
for(var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener('click', function(event) {
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('.is-checked');
    event.target.classList.add('.is-checked');
  });
}
