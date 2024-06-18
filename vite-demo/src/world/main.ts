import '@/world/style.scss'
import { add } from '@/utils/number-helper.ts'
import { wait } from '@/utils/promise-helper.ts'
import { replaceText, updateText } from '@/utils/update-text.ts'

(() => {
  updateText()
  replaceText()

  console.log('world/main.ts')
  console.log('Hello World!')

  const result = add(1, 3)
  console.log('1 + 2 =', result)

  const backButton = document.querySelector('button#back-button')
  const helloButton = document.querySelector('button#hello-button')
  const worldButton = document.querySelector('button#world-button')
  console.log('__java_vite_placeholder__')

  if (backButton) {
    backButton.addEventListener('click', async () => {
      backButton.innerHTML = `<svg class="animate-spin" style="color:white;width:1.25rem;height:1.25rem;margin-right:.75rem;margin-left:-.25rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle style="opacity:.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path style="opacity:.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>` + backButton.innerHTML

      backButton.attributes.setNamedItem(document.createAttribute('disabled'))
      await wait(3000)
      window.history.back()
    })
  }

  if (worldButton) {
    worldButton.addEventListener('click', async () => {
      const { deepMerge } = await import('../utils/config-helper.ts')
      const objectA = { a: 1, b: { c: 2 } }
      const objectB = { b: { d: 3 }, e: 4 }

      if (document.getElementById('deep-merge')) {
        document.getElementById('deep-merge')?.remove()
      }

      const p = document.createElement('p')
      p.id = 'deep-merge'
      p.innerHTML = JSON.stringify(deepMerge(objectA, objectB), null, 2)
      document.body.appendChild(p)
    })
  }

  if (helloButton) {
    helloButton.addEventListener('click', async () => {
      const imageModule = await import('/bg_01.png')
      const image = document.createElement('img')
      image.src = imageModule.default
      document.body.appendChild(image)
    })
  }
})()
