import '@/world/style.scss'
import { add } from '@/utils/number-helper.ts'
import { wait } from '@/utils/promise-helper.ts'

(() => {
  console.log('world/main.ts')
  console.log('Hello World!')

  const result = add(1, 2)
  console.log('1 + 2 =', result)

  const backButton = document.querySelector('button#back-button')
  const helloButton = document.querySelector('button#hello-button')
  const worldButton = document.querySelector('button#world-button')

  if (backButton) {
    backButton.addEventListener('click', async () => {
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
