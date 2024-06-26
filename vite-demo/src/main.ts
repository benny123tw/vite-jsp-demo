import '@/style.css'
import typescriptLogo from '@/typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '@/counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p class="read-the-docs">
      Submit a name to navigate to the next page
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.querySelector<HTMLButtonElement>('button[type=submit]')?.addEventListener('click', (e) => {
  const input = document.querySelector<HTMLInputElement>('input')

  if (!input?.value) {
    e.preventDefault()
    input?.classList.add('error')
    input?.addEventListener('input', () => {
      input.classList.remove('error')
    })
  }
})