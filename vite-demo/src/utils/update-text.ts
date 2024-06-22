/// <reference types="vite/client" />

import { randomNumber } from './random-number'

const updateText = () => {
  const elem = document.getElementById('text')
  if (elem) {
    elem.innerHTML = `Hello World!!! (__replace_text__)
    <br>Random number: ${randomNumber()}
    <br>Time: ${new Date().getTime()}`
  }
}

const replaceText = () => {
  const elem = document.getElementById('text')
  const text = 'Sealed'

  if (elem) {
    elem.innerHTML = elem.innerHTML?.replace(/\(.*\)/, `(${ text })`) || elem.innerHTML
  }
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    if (!m) return
    // change the replacement text will trigger the HMR
    // random number and current time will not be updated
    m.replaceText()
  })
}

export { updateText, replaceText }
