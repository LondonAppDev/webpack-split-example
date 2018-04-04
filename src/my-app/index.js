import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['My', 'App'], ' ');
  return element;
}

$(document).ready(function() {
  document.body.appendChild(component());
});
