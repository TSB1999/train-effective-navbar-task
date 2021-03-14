import "./main.scss";
import "./index.html";



var element = document.getElementById('protocols-container') // main container

var tag = document.createElement('div') // new div
tag.className = 'c-item__select'



var icon = document.createElement('i') //icon
icon.className = 'c-item__icon fas fa-fire'

var textNode = document.createElement('text') //text
textNode.className = 'c-item__text'
var text = document.createTextNode('Wet Sauna')
textNode.appendChild(text)

tag.appendChild(icon)
tag.appendChild(text)

element.appendChild(tag)



if (module.hot) {
  module.hot.accept();
}