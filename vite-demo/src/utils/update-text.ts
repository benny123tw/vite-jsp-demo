/// <reference types="vite/client" />

import { randomNumber } from './random-number'

const updateText = () => {
  const elem = document.getElementById('text')
  if (elem) {
    elem.textContent = 'Hello World!!! ' + randomNumber() + ' (__replace_text__)'
  }
}

const replaceText = () => {
  const elem = document.getElementById('text')
  const text = 'Sealed'

  if (elem) {
    elem.textContent = elem.textContent?.replace(/\(.*\)/, `(${ text })`) || elem.textContent
  }
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    if (!m) return
    // change the replacement text will trigger the HMR
    // random number will not be updated
    m.replaceText()
  })
}

export { updateText, replaceText }
