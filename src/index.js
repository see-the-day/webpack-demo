import _ from 'lodash'
import print from './print'
function common() {
  let element = document.createElement('div')
  let button = document.createElement('button')
  button.innerHTML = '点击'
  button.onclick = print
  element.appendChild(button)
  return element
}
document.body.appendChild(common())